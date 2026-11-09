# Wargame Studio – fejlesztési vonal (wargame-dev)

**Jelenlegi verzió:** v0.3.0-dev (2026-11-09)

A NATO Wargaming Handbook alapú Wargame Studio külön fejlesztési ága. A stabil demó (v0.2.x) a `castor81/wargame` repóban marad.

## Felépítés
| Fájl | Szerep |
|---|---|
| `index.html` | Belépő oldal: 3D gránát (biztosítószeg kihúzása) + belépő ablak, mögötte mozgó, átlátszó „fluid” mintázat. Szerepkör legördülőből, jelszó nélkül. |
| `app.html` | Wargame Studio (a v0.2.2 demó alapján), a bejelentkezett profilhoz igazított felülettel. |
| `js/profiles.js` | **Profilok és munkamenet** – a 11 handbook-szerep, profilonként az elérhető nézetek és a kezdőnézet. Itt szerkeszthető. |
| `js/pattern.js` | A háttér mintázatának animációja (canvas). |
| `assets/grenade.glb`, `assets/pattern-tile.png` | 3D modell és a mintázat egy eleme. |

## Profilok és UI-k szétválasztása (v0.3.0)
A belépés után a munkamenet (`sessionStorage`) a kiválasztott szerepkört tárolja; az `app.html` csak az ahhoz tartozó füleket jeleníti meg, a szerepváltás kilépéssel történik. A telefonos játékosnézet (`app.html?room=…&seat=…`) belépés nélkül működik.

## Ismert korlátok
- Egyelőre nincs jelszó és szerveroldali hitelesítés: a szerepkör szabadon választható (fejlesztői mód).
- A profil szerinti nézetkorlátozás kliensoldali, nem biztonsági határ.

## Változásnapló
- **v0.3.0-dev (2026-11-09):** új belépő oldal (gránát + mintázat + szerep legördülő), profilkonfiguráció, profil-alapú nézetek, a v0.2.2 demó beemelve `app.html`-ként.
