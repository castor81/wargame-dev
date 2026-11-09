# Wargame Studio – fejlesztési vonal (wargame-dev)

**Jelenlegi verzió:** v0.3.6-dev (2026-11-09)

A NATO Wargaming Handbook alapú Wargame Studio külön fejlesztési ága. A stabil demó (v0.2.x) a `castor81/wargame` repóban marad.

## Felépítés
| Fájl | Szerep |
|---|---|
| `index.html` | Belépő oldal: 3D gránát (biztosítószeg kihúzása) + belépő ablak, mögötte mozgó, átlátszó „fluid” mintázat. Szerepkör legördülőből, jelszó nélkül. |
| `app.html` | Wargame Studio (a v0.2.2 demó alapján), a bejelentkezett profilhoz igazított felülettel. |
| `js/profiles.js` | **Profilok és munkamenet** – a 11 handbook-szerep, profilonként az elérhető nézetek és a kezdőnézet. Itt szerkeszthető. |
| `js/i18n.js` | A belépő oldal nyelvi rétege (HU, EN, DE, FR): feliratok, szerepkörök nevei és leírásai, hibaüzenetek. Új nyelv itt vehető fel. |
| `js/pattern.js` | A háttér mintázatának animációja (canvas). |
| `assets/grenade.glb`, `assets/pattern-tile.png` | 3D modell és a mintázat egy eleme. |

## Profilok és UI-k szétválasztása (v0.3.0)
A belépés után a munkamenet (`sessionStorage`) a kiválasztott szerepkört tárolja; az `app.html` csak az ahhoz tartozó füleket jeleníti meg, a szerepváltás kilépéssel történik. A telefonos játékosnézet (`app.html?room=…&seat=…`) belépés nélkül működik.

## Adatmegőrzés (demó)
A telefonos szinkron Supabase-adatai (`wg_rooms`, `wg_events`) 3 nap után automatikusan törlődnek: napi 03:17 UTC-kor fut a `wg-purge-old` időzített feladat (`pg_cron`, `public.wg_purge_old()`). Egy szoba addig él, amíg a gazdagép frissíti; a törlés az utolsó frissítéstől számít. SQL: `supabase/`.

## Ismert korlátok
- Egyelőre nincs jelszó és szerveroldali hitelesítés: a szerepkör szabadon választható (fejlesztői mód).
- A profil szerinti nézetkorlátozás kliensoldali, nem biztonsági határ.

## Változásnapló
- **v0.3.6-dev (2026-11-09):** a „Pull” nyíl és felirat 3D-sebb: extrudált (vastag) nyíltest, fémes sárgaréz-árnyalás és végigfutó csillanás, perspektivikus megdöntés, extrudált betűk vetett árnyékkal.
- **v0.3.5-dev (2026-11-09):** a „Pull” felirat doboza nyíl alakú, és ütemesen a húzás irányába (a pintől balra) mozog.
- **v0.3.4-dev (2026-11-09):** a Supabase demó-adatok (szobák, események) automatikus törlése 3 nap után (napi időzített feladat).
- **v0.3.7-dev (2026-11-09):** a Játéktér térképrácsa alatt alaptérkép (légi felvétel, `assets/default-map.jpg`); térképszelvény feltöltése (JPG/PNG/WebP, a böngészőben megmarad, a Térkép-választóban "Feltöltött szelvény"); a térkép képaránya követi a képet.
- **v0.4.0-dev (2026-11-09):** forgatókönyv-csomagok (Alap / ENSZ békeművelet – VII. fejezet, a válaszopciók a 39–43. és 51. cikk szerint); teljes folyamat-napló (tervezés, szervezés, végrehajtás, elemzés; CSV/JSON export); AAR-generátor; „Teljes folyamat-teszt (szimuláció)". Tesztanyagok: `docs/pso-teszt_v0.4.0_2026-11-09/`.
- **v0.3.3-dev (2026-11-09):** DEMÓ: minden új belépés tiszta játékkal indul (az előző játék mentett állapota törlődik; frissítésnél, ugyanazon a munkameneten belül az állapot megmarad). A Wargame-igazgató bármely lépésben aktiválhat/kikapcsolhat helyeket a Játékosok nézetben.
- **v0.3.2-dev (2026-11-09):** belépő oldal: a „Húzd ki a pint” felirat helyett arany nyíl „Pull” felirattal; nyelvválasztó (HU/EN/DE/FR), a teljes belépő felület – szerepkör-lista, leírások, üzenetek – a választott nyelven; a választás megmarad. Az `app.html` egyelőre magyar.
- **v0.3.1-dev (2026-11-09):** Játékosok nézet: az ülések átlátszó zöld/piros színezése (ember: QR-csatlakozás, AI: működési prompt megadva/hiányzik, élő frissítéssel); a döntésekben egyéni akció is megadható (szabad szöveg, mobilon is), a szektor továbbra is fix választólista; a döntési mátrix új „EGY” oszlopot kapott.
- **v0.3.0-dev (2026-11-09):** új belépő oldal (gránát + mintázat + szerep legördülő), profilkonfiguráció, profil-alapú nézetek, a v0.2.2 demó beemelve `app.html`-ként.

- **v0.5.0-dev (2026-11-09)** – Új játék üres (nincs előző scenario/opció). Importálható Scenario-csomag (JSON), Scenario-fejlesztő nézet, Scenario Brief gomb minden szerepnek (telefonon is), csapatonkénti válaszlehetőségek és injektek a scenarióból, 5. lépés kapuja, naplózás, sablon + minta (`scenarios/`).
- **v0.5.0-dev (2026-11-09)** – `scenario-szerkeszto_v1.0_2026-11-09.html`: önálló űrlapos Scenario-szerkesztő (élő JSON-előnézet, letöltés, betöltés, ellenőrzés), a fő program színvilágával; a Scenario nézetből is elérhető.
- **v0.6.0-dev (2026-11-09)** – Élő AI-ügynökök (N8N webhook → LLM) IGA-kapcsolóval (kétszeres megerősítés + kód), alapértelmezetten szimulált; elbírálás-támogatás; napló. N8N workflow-k: `docs/n8n/`.
