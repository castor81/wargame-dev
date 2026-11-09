# Tesztforgatókönyv – ENSZ békeművelet (VII. fejezet), Wargame Studio v0.4.0 · 2026-11-09

Cél: a teljes folyamat (tervezés → szervezés → végrehajtás → elemzés) kipróbálása tesztelői csoport nélkül, fiktív forgatókönyvvel (Aldória, Észak-völgy). Minden lépés, produktum, döntés és elbírálás automatikusan naplózódik; a végén AAR-vázlat készül.

## A. Automatikus végigfuttatás (1 perc)
1. Belépés bármely profillal (pl. Wargame-igazgató), fejlécben: Forgatókönyv = „ENSZ békeművelet (VII. fejezet)".
2. Folyamat nézet → Demó-vezérlés → „Teljes folyamat-teszt (szimuláció)" (kétszeri kattintás).
3. Eredmény: mind a 18 lépés lezárva; Adat és elemzés nézet: folyamat-napló, ODCR, AAR-vázlat; letöltés CSV/JSON/MD.
Megjegyzés: a szimuláció az adatmodellt hajtja meg (nem a gombokat), a szerepek és az AI-ülések szimuláltak.

## B. Egyszemélyes, kézi teszt (szerepváltással)
| Fázis | Teendő | Elvárt eredmény |
|---|---|---|
| 1–5 Tervezés | MEG: probléma, jóváhagyás; IGA, TER, FOR, ELE: feladatok és produktumok | A lezárás gomb csak a kapu teljesülése után aktív; a megbízói pont csak MEG-nél |
| 5 Játéktervezés | Játékosok nézet: 4×10 ülés, 2–3 AI-hely; Adat nézet: Minta-DCAP | Zöld/piros ülésállapot; a DCAP ≥ 3 kérdés |
| 6–7 Playtest | Játéktér: 2 playtest-futás, injekt → döntés → elbírálás | A DCAP-teszt jelölhető (van adat / hiányzik) |
| 9 Főpróba | 1 főpróba-futás | Kapu: lezárt futás |
| 11 Felállítás | Mobil: QR-csatlakozás (vagy „csatlakozott" gomb) | Minden aktív emberi ülés zöld |
| 12–13 Végrehajtás | Turn 0, majd 5 kör: válaszopciók a 39–43. és 51. cikk szerint + egyéni opció | Csapatra húzva döntési mátrix; adat nő |
| 14–18 Elemzés | Hot-wash, ODCR, AAR (16. lépés: „Betöltés az AAR-mezőbe"), jelentés, archiválás | A folyamat lezárul |
Mindenhol: Adat és elemzés → Folyamat-napló: minden fenti művelet időbélyeggel, szereppel látszik.

## C. Elfogadási szempontok
- Napló: minden lépéslezárás, produktum, feladat, megbízói jóváhagyás, OOB-változás, csatlakozás, döntés, elbírálás, ODCR bejegyzés megvan, szerepmegjelöléssel.
- AAR: összefoglaló, idővonal, szervezés, körönkénti eredmény, döntési minták, ODCR, DCAP-lefedettség, folyamat-megállapítások, ajánlások.
- Negatív próba: más szerep nem hagyhatja jóvá a megbízói pontot; hiányos kapu nem zárható.

## D. Ismert korlátok
- Az AI-ülések döntései szimuláltak (valódi LLM a következő verzióban); az elbírálást ember vagy kockadobás adja.
- A napló és az állapot csak az adott böngészőben marad meg; a demó Supabase-adatai 3 nap után törlődnek.
- A szimulált teszt eredményei nem operatív következtetések.
