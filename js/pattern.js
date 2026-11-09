/* Mozgó, átlátszó „fluid” mintázat a belépő oldal háttérében (a gránát és a belépő ablak mögött). */
(function () {
  var cv = document.getElementById('bg'); if (!cv) return;
  var ctx = cv.getContext('2d'); if (!ctx) return;
  var tile = new Image(); tile.src = 'assets/pattern-tile.png';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CX = 158, CY = 176, SZ = 108;          // rácsosztás és ábraméret (CSS px)
  var W = 0, H = 0, dpr = 1, t0 = performance.now(), mx = 0, my = 0, tx = 0, ty = 0, ready = false;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduce) draw(0);
  }
  function draw(t) {
    if (!ready) return;
    ctx.clearRect(0, 0, W, H);
    var drift = reduce ? 0 : t, ox = (drift * 8) % CX, oy = (drift * 4.5) % (CY * 2);
    var cols = Math.ceil(W / CX) + 3, rows = Math.ceil(H / CY) + 4;
    var R = Math.min(W, H) * 0.5, cxm = W / 2, cym = H / 2;
    mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
    for (var r = -2; r < rows; r++) {
      for (var c = -2; c < cols; c++) {
        var bx = c * CX + (r & 1 ? CX / 2 : 0) + ox - CX / 2;
        var by = r * CY + oy - CY;
        // folyadékszerű eltolás: egymásra rakott hullámmezők
        var dx = 26 * Math.sin(by * 0.0042 + t * 0.35) + 14 * Math.sin(bx * 0.006 - t * 0.5 + 1.7) + mx * 16;
        var dy = 22 * Math.cos(bx * 0.0038 + t * 0.30) + 12 * Math.cos(by * 0.007 + t * 0.42) + my * 12;
        var x = bx + dx, y = by + dy;
        if (x < -SZ || x > W + SZ || y < -SZ || y > H + SZ) continue;
        var wave = 0.5 + 0.5 * Math.sin(bx * 0.004 + by * 0.003 + t * 0.6);
        var dist = Math.hypot(x - cxm, y - cym) / R;
        var a = (0.06 + 0.11 * wave) * (0.62 + 0.38 * Math.min(1, dist));
        var s = 1 + 0.07 * Math.sin(bx * 0.005 - by * 0.004 + t * 0.45);
        var rot = 0.07 * Math.sin(bx * 0.005 + by * 0.004 + t * 0.4);
        ctx.globalAlpha = a;
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
        ctx.drawImage(tile, -SZ / 2, -SZ / 2, SZ, SZ);
        ctx.restore();
      }
    }
    ctx.globalAlpha = 1;
  }
  function loop(now) { draw((now - t0) / 1000); requestAnimationFrame(loop); }
  tile.onload = function () { ready = true; resize(); if (!reduce) requestAnimationFrame(loop); else draw(0); };
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', function (e) {
    tx = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    ty = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
  }, { passive: true });
  resize();
})();
