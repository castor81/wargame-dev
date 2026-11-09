/* Wargame Studio – felhasználói profilok (handbook-szerepek) és munkamenet.
   A belépő oldal (index.html) és az alkalmazás (app.html) ugyanezt a konfigurációt használja,
   így a profilok és a hozzájuk tartozó UI külön, egy helyen szerkeszthetők. */
(function (g) {
  var GROUPS = [
    ['ctl', 'Irányítás és elbírálás'],
    ['dev', 'Tervezés és fejlesztés'],
    ['ply', 'Játékosok és szereplők'],
    ['spn', 'Megbízó']
  ];
  /* views: az adott profil számára elérhető fülek; landing: belépés utáni kezdőnézet */
  var LIST = [
    { id: 'IGA', nm: 'Wargame-igazgató', en: 'Wargame Director', group: 'ctl', views: ['flow', 'roster', 'board', 'data'], landing: 'flow',
      desc: 'Teljes jogkör: kapuk lezárása, futások és körök indítása, minden nézet.' },
    { id: 'ADJ', nm: 'Adjudikátor', en: 'Adjudicator', group: 'ctl', views: ['flow', 'board', 'data'], landing: 'board',
      desc: 'Elbírálja a csapatok döntéseit, közli az eredményeket a Játéktéren.' },
    { id: 'FAC', nm: 'Facilitátor', en: 'Facilitator', group: 'ctl', views: ['flow', 'board', 'data'], landing: 'board',
      desc: 'Támogatja a játék menetét, megfigyeléseket rögzít a körökhöz.' },
    { id: 'ELE', nm: 'Elemző', en: 'Analyst', group: 'ctl', views: ['flow', 'board', 'data'], landing: 'data',
      desc: 'DCAP-adatok gyűjtése és elemzése; az Adat és elemzés nézet a kezdőlap.' },
    { id: 'TER', nm: 'Játéktervező', en: 'Game Designer', group: 'dev', views: ['flow', 'roster'], landing: 'flow',
      desc: 'A játék céljainak, szabályainak és szerkezetének tervezése (1–5. lépés).' },
    { id: 'FOR', nm: 'Forgatókönyv-tervező', en: 'Scenario Designer', group: 'dev', views: ['flow', 'board'], landing: 'flow',
      desc: 'Forgatókönyv és injektek; a körökben az injekt kiadása.' },
    { id: 'FEJ', nm: 'Játékfejlesztő', en: 'Game Developer', group: 'dev', views: ['flow', 'roster', 'data'], landing: 'flow',
      desc: 'Eszközök, adatmodell és játékfelület fejlesztése, playtest-támogatás.' },
    { id: 'REN', nm: 'Rendezvényszervező', en: 'Event Manager', group: 'dev', views: ['flow', 'roster'], landing: 'roster',
      desc: 'Helyszín, létszám, ülések és logisztika; a Játékosok nézet a kezdőlap.' },
    { id: 'JAT', nm: 'Játékosok', en: 'Players', group: 'ply', views: ['roster', 'board'], landing: 'roster',
      desc: 'Játékos csapatok tagjai: saját ülés, telefonos nézet, a Játéktér követése.' },
    { id: 'OPF', nm: 'Nem játékos csapatok (OPFOR)', en: 'Non-player teams', group: 'ply', views: ['flow', 'roster', 'board'], landing: 'board',
      desc: 'Ellenfél és semleges szereplők vezetése a játékirányítás keretében.' },
    { id: 'MEG', nm: 'Megbízó', en: 'Sponsor', group: 'spn', views: ['flow', 'data'], landing: 'flow',
      desc: 'Megbízói pontok jóváhagyása és az eredmények, jelentés áttekintése.' }
  ];
  var byId = {}; LIST.forEach(function (p) { byId[p.id] = p; });

  var KEY = 'wgd-session', LAST = 'wgd-lastrole';
  var SESSION = {
    get: function () {
      try { var j = JSON.parse(sessionStorage.getItem(KEY)); return j && byId[j.role] ? j : null; } catch (e) { return null; }
    },
    save: function (o) {
      var rec = { role: o.role, name: (o.name || '').trim().slice(0, 60), at: Date.now() };
      try { sessionStorage.setItem(KEY, JSON.stringify(rec)); } catch (e) {}
      try { localStorage.setItem(LAST, o.role); } catch (e) {}
      return rec;
    },
    clear: function () { try { sessionStorage.removeItem(KEY); } catch (e) {} },
    last: function () { try { var r = localStorage.getItem(LAST); return byId[r] ? r : ''; } catch (e) { return ''; } }
  };
  g.WG_PROFILES = { list: LIST, byId: byId, groups: GROUPS };
  g.WG_SESSION = SESSION;
})(window);
