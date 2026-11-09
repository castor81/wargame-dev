# After Action Review (AAR) – ENSZ békeművelet – Észak-völgy (VII. fejezet)

- Scenario: ENSZ békeművelet – Észak-völgy (VII. fejezet) (v1.0-áttekintett, forrás: szimulált teszt: pso-eszak-volgy_v1.0_2026-11-09.json)
- Program: Wargame Studio v0.5.0 · 2026-11-09
- Az AAR automatikus vázlat a folyamat-naplóból és a rögzített adatokból; az elemző (ELE) és a Wargame-igazgató (IGA) hagyja jóvá.
- **Megjegyzés:** a naplóbejegyzések szimulált teszt eredményei (nem valódi résztvevőktől); az AAR a folyamat és az alkalmazás vizsgálatát szolgálja, nem operatív következtetések levonására.

## 1. Összefoglaló

- Probléma: Hogyan tartható fenn a tűzszünet, és hogyan védhetők meg a civilek az Észak-völgy tartományban (Aldória, fiktív), ha az ENSZ Biztonsági Tanácsa az Alapokmány VII. fejezete alapján robusztus mandátumot adott a békefenntartó missziónak?
- Cél: Az ENSZ-erő döntéshozatalának vizsgálata VII. fejezeti mandátum alatt, korlátozott erőforrásokkal.
- Célkitűzések:
  1. Értékelni a 40–42. cikk szerinti eszközök fokozatos és arányos alkalmazását
  2. Feltárni a civilek védelmének (POC) és a humanitárius hozzáférésnek az akadályait
  3. Vizsgálni az ENSZ-erő, a vendéglátó állam és a humanitárius szervezetek koordinációját
- Módszertan: Matrix wargame; elbírálás: Analitikus támogatással; 5 tervezett kör
- Időtartam a napló szerint: 2026. 03. 02. 08:00 – 2026. 06. 23. 11:57 (113 nap)
- Lezárt lépések: 18/18
- Résztvevők (aktív helyek): 21 emberi, 6 AI
- Futások: 2 playtest, 1 főpróba, végrehajtás: 5 kör (+ turn 0)
- Adat: 102 indokolt döntés, 18 elbírálás, 6 időmérés, 6 megfigyelés
- Naplóbejegyzések: 481

## 2. Folyamat-idővonal (tervezés → szervezés → végrehajtás → elemzés)

| Lépés | Fázis | Lezárva | Pipák | Produktum | Megbízó | Közreműködő szerepek |
|---|---|---|---|---|---|---|
| 01 Kezdeményezés | Tervezés | 2026. 03. 02. 11:20 | 4/4 | 2 | igen | IGA, MEG, ELE, REN |
| 02 Behatárolás | Tervezés | 2026. 03. 05. 11:48 | 4/4 | 5 | igen | IGA, MEG, ELE, REN |
| 03 Kutatás | Tervezés | 2026. 03. 09. 10:53 | 3/3 | 2 | – | IGA, TER, FOR, ELE |
| 04 Tervezési ismertető | Tervezés | 2026. 03. 12. 11:37 | 4/4 | 4 | igen | IGA, MEG, TER, ELE |
| 05 Játéktervezés | Tervezés | 2026. 03. 16. 11:49 | 6/6 | 2 | – | IGA, TER, ELE, FOR, FEJ, OPF, REN |
| 06 Playtest | Fejlesztés | 2026. 03. 30. 14:37 | 2/2 | 1 | – | IGA, FEJ, ELE, FOR, JAT, ADJ, FAC |
| 07 Finomítás | Fejlesztés | 2026. 04. 06. 11:45 | 2/2 | 1 | – | IGA, FEJ, ELE |
| 08 Véglegesítés | Fejlesztés | 2026. 04. 13. 12:07 | 5/5 | 2 | feltételes | IGA, MEG, FEJ, ELE, REN |
| 09 Főpróba | Fejlesztés | 2026. 04. 27. 13:49 | 6/6 | 1 | igen | IGA, MEG, ELE, REN, ADJ, FAC, FOR, JAT |
| 10 Kiképzés | Végrehajtás | 2026. 05. 04. 12:07 | 5/5 | 2 | – | IGA, ELE, JAT, ADJ, FAC |
| 11 Felállítás, IT-teszt | Végrehajtás | 2026. 05. 11. 12:32 | 4/4 | 3 | – | IGA, FEJ, REN, JAT, ADJ, FAC, ELE, FOR, OPF |
| 12 Jégtörő, warm start | Végrehajtás | 2026. 05. 18. 11:56 | 5/5 | 1 | – | IGA, FAC, ELE, JAT, ADJ, FOR |
| 13 Játék végrehajtása | Végrehajtás | 2026. 05. 18. 17:22 | 6/6 | 0 | – | IGA, JAT, OPF, FAC, ADJ, ELE, FOR |
| 14 Zárás | Végrehajtás | 2026. 05. 19. 12:15 | 4/4 | 2 | igen | IGA, MEG, FAC, JAT, ELE |
| 15 Utóelemzés | Elemzés és jelentés | 2026. 05. 26. 11:34 | 2/2 | 0 | – | ELE, IGA |
| 16 Értékelés, AAR | Elemzés és jelentés | 2026. 06. 09. 12:49 | 3/3 | 4 | igen | IGA, MEG, ELE |
| 17 Jelentés, bemutató | Elemzés és jelentés | 2026. 06. 16. 12:38 | 3/3 | 3 | igen | IGA, ELE, MEG |
| 18 Tudás és beépítés | Elemzés és jelentés | 2026. 06. 23. 11:57 | 2/2 | 3 | – | IGA, MEG |

Naplóbejegyzések típus szerint: folyamat 1 · beállítás 3 · produktum 38 · DCAP 9 · feladat 70 · megbízó 7 · kapu 18 · szervezés 30 · játék 44 · döntés 204 · elbírálás 36 · megfigyelés 12 · ODCR 9.

## 3. Szervezés és előkészítés

- KÉK (ENSZ békefenntartó erő (Force HQ)): 7 aktív hely, ebből 5 emberi (5 csatlakozott), 2 AI
- PIROS (Szembenálló fegyveres csoport): 6 aktív hely, ebből 4 emberi (4 csatlakozott), 2 AI
- ZÖLD (Vendéglátó állam hatóságai, humanitárius szervezetek): 4 aktív hely, ebből 3 emberi (3 csatlakozott), 1 AI
- Szervezési naplóbejegyzés (OOB, csatlakozás, AI-prompt): 30

## 4. Végrehajtás – játékkörök

| Kör | Injekt | KÉK | PIROS | ZÖLD | Idő (perc) |
|---|---|---|---|---|---|
| T0 | Turn 0 – bemelegítő vignette: a tűzszüneti vonalon feszültség; az ENSZ-járőr a PIROS erők… | Helyzetmegállapítás és jelentés az SZ… @ B3 → **Siker** | Állások megerősítése, védelem @ B3 → **Részleges** | Koordináció az ENSZ-erővel és a szerv… @ B3 → **Részleges** | 35 |
| T1 | A PIROS erők átlépték a tűzszüneti vonalat a B1 szektorban; civil falvak kerültek veszély… | Ideiglenes intézkedések: tűzszünet, s… @ B1 → **Részleges** | Támadó akció a tűzszüneti vonalon túl @ B1 → **Kudarc** | Hozzájárulás megerősítése, szabad moz… @ B1 → **Siker** | 35 |
| T2 | Az A3 szektorban ellenőrzőponton feltartottak egy humanitárius konvojt; élelmiszer- és gy… | Civilek védelme, humanitárius hozzáfé… @ A1 → **Siker** | Utánpótlás és fegyverszállítás szerve… @ A1 → **Részleges** | Humanitárius segélyek szétosztása @ A1 → **Részleges** | 35 |
| T3 | Menekültáradat az A2 szektor útjain; a beáramlás akadályozza az ENSZ-erő mozgását és a ko… | Tárgyalás, közvetítés a felek között @ C1 → **Részleges** | Propaganda, dezinformáció a helyi méd… @ C1 → **Részleges** | Menekültek befogadása és regisztrálása @ C1 → **Siker** | 35 |
| T4 | Embargót sértő fegyverszállítmány észlelve a C2 határátkelőnél (a 41. cikk szerinti intéz… | Nem katonai eszközök: embargó-, szank… @ B3 → **Siker** | Utánpótlás és fegyverszállítás szerve… @ B3 → **Kudarc** | Jogi és közigazgatási intézkedések @ B3 → **Siker** | 35 |
| T5 | Támadás érte az ENSZ-járőrt a B3 szektorban; sérültek; azonnali ROE-döntés szükséges (42.… | Önvédelem, jogos védelem (51. cikk) @ B2 → **Részleges** | Támadó akció a tűzszüneti vonalon túl @ B2 → **Kudarc** | Tájékoztatás, kommunikáció a lakosság… @ B2 → **Részleges** | 35 |

Eredményindex (siker +2, részleges +1, kudarc −1): KÉK +9 (3/3/0) · PIROS +0 (0/3/3) · ZÖLD +9 (3/3/0)

## 5. Döntési minták

| Válaszopció | KÉK | PIROS | ZÖLD | Összesen | Siker / részleges / kudarc (a csapat körének eredménye) |
|---|---|---|---|---|---|
| Ideiglenes intézkedések: tűzszünet, szétválasztás (40. cikk) | 7 | 0 | 0 | 7 | 0 / 7 / 0 |
| Támadó akció a tűzszüneti vonalon túl | 0 | 12 | 0 | 12 | 0 / 0 / 12 |
| Hozzájárulás megerősítése, szabad mozgás biztosítása | 0 | 0 | 4 | 4 | 4 / 0 / 0 |
| Civilek védelme, humanitárius hozzáférés biztosítása | 7 | 0 | 0 | 7 | 7 / 0 / 0 |
| Utánpótlás és fegyverszállítás szervezése | 0 | 12 | 0 | 12 | 0 / 6 / 6 |
| Humanitárius segélyek szétosztása | 0 | 0 | 4 | 4 | 0 / 4 / 0 |
| Tárgyalás, közvetítés a felek között | 7 | 0 | 0 | 7 | 0 / 7 / 0 |
| Propaganda, dezinformáció a helyi médiában | 0 | 6 | 0 | 6 | 0 / 6 / 0 |
| Menekültek befogadása és regisztrálása | 0 | 0 | 4 | 4 | 4 / 0 / 0 |
| Nem katonai eszközök: embargó-, szankcióellenőrzés (41. cikk) | 7 | 0 | 0 | 7 | 7 / 0 / 0 |
| Jogi és közigazgatási intézkedések | 0 | 0 | 4 | 4 | 4 / 0 / 0 |
| Önvédelem, jogos védelem (51. cikk) | 7 | 0 | 0 | 7 | 0 / 7 / 0 |
| Tájékoztatás, kommunikáció a lakossággal | 0 | 0 | 4 | 4 | 0 / 4 / 0 |

## 6. Célkitűzések elérése (ODCR)

**1. Értékelni a 40–42. cikk szerinti eszközök fokozatos és arányos alkalmazását**
- Observation: 5 kör, 102 indokolt döntés; elbírálások: 6 siker, 9 részleges, 3 kudarc; 6 megfigyelés.
- Discussion: A 40. és 42. cikk szerinti eszközök fokozatos alkalmazása ott volt eredményes, ahol a döntés előzetes figyelmeztetéssel és arányosan történt.
- Conclusion: A KÉK csapat az ideiglenes intézkedéseket és a POC-t eredményesebben használta, mint az erőalkalmazást; az arányosság indoklása több körben gyenge volt.
- Recommendation: A ROE-kártyát döntési támogató eljárásrenddel kell kiegészíteni.

**2. Feltárni a civilek védelmének (POC) és a humanitárius hozzáférésnek az akadályait**
- Observation: 5 kör, 102 indokolt döntés; elbírálások: 6 siker, 9 részleges, 3 kudarc; 6 megfigyelés.
- Discussion: A civilek védelmét a koordinációs késedelem és az információhiány akadályozta; a humanitárius hozzáférés a ZÖLD és a KÉK közös döntésein múlt.
- Conclusion: A cél részben teljesült: a POC-döntések a körök többségében sikeresek voltak, de a konvoj-feltartás és a menekültáradat ütközött.
- Recommendation: Közös POC- és konvoj-koordinációs cella kialakítása az ENSZ-erő, a hatóságok és a szervezetek között.

**3. Vizsgálni az ENSZ-erő, a vendéglátó állam és a humanitárius szervezetek koordinációját**
- Observation: 5 kör, 102 indokolt döntés; elbírálások: 6 siker, 9 részleges, 3 kudarc; 6 megfigyelés.
- Discussion: A koordináció a legfőbb szűk keresztmetszet; az információ a ZÖLD felé késve jutott el.
- Conclusion: A cél részben teljesült; a koordináció erősíthető, de nem volt egyértelmű közös helyzetkép.
- Recommendation: Közös helyzetkép (COP) és rendszeres egyeztetés a követő gyakorlatokon.

## 7. Adatgyűjtés (DCAP) lefedettsége

- Milyen mandátum- és ROE-értelmezés alapján döntöttek a csapatok az erőalkalmazásról (40–42., 51. cikk)? → Döntés és indoklás: 102 adatpont; teszt: volt adat
- Hogyan alakult a civilek védelmének és a humanitárius hozzáférésnek az eredménye körönként? → Elbírálási eredmény: 18 adatpont; teszt: volt adat
- Mennyi idő kellett a döntésekhez a kritikus injekteknél (ROE-döntés, konvoj)? → Időfelhasználás: 6 adatpont; teszt: volt adat
- Mi akadályozta a koordinációt az ENSZ-erő, a vendéglátó állam és a humanitárius szervezetek között? → Megfigyelés (ELE/FAC): 6 adatpont; teszt: volt adat

## 8. Megfigyelések és hot-wash

- T0: Turn 0: a csapatok megismerték az eszközöket; a VII. fejezeti mandátum értelmezése eltért a KÉK törzsben.
- T1: A tűzszüneti vonal megsértése után a KÉK a 40. cikk szerinti ideiglenes intézkedéseket választotta; a PIROS részben alkalmazkodott, a ZÖLD információja késett.
- T2: A humanitárius konvoj feltartása: a POC és a hozzáférés együttes kezelése koordinációs hiányt mutatott a KÉK és a ZÖLD között.
- T3: Menekültáradat: a mozgás és a POC ütközött; a tárgyalás a PIROS felé időt nyert, de a ROE-értelmezés vitát váltott ki.
- T4: Embargó-megkerülés: a 41. cikk szerinti nem katonai eszközök hatékonynak bizonyultak, a PIROS utánpótlási kísérlete kudarcot vallott.
- T5: Járőrtámadás: az önvédelem (51. cikk) és a mandátum szerinti erőalkalmazás (42. cikk) határa vitás volt; az arányosság indoklása gyenge.
- Hot-wash: A játékosok szerint a ROE-értelmezés és az információmegosztás volt a szűk keresztmetszet; a nem katonai eszközök alulhasználtak.

## 9. Folyamat- és módszertani megállapítások

- Megbízói pontok: 7 jóváhagyás a naplóban (szükséges: 7).
- Újranyitott lépések: 0.
- Szerepfegyelem: 0 feladatot nem a megnevezett szerep pipált ki.
- A Wargame-igazgató (IGA) nevében kipipált, más szerepre szóló feladat: 0.
- Kapu-hibák a tesztben: 0.
- Leghosszabb lépés a napló szerint: 18. Tudás és beépítés (113 nap).

## 10. Tanulságok és ajánlások (automatikus vázlat – az elemző véglegesíti)

- Erősség: a legjobb eredményindex a KÉK csapatnál (+9).
- Fejlesztendő: a legalacsonyabb eredményindex a PIROS csapatnál (+0); kudarcot tartalmazó körök: T1, T4, T5.
- Az indoklások és a megfigyelések alapján vizsgálandó: a koordináció (ENSZ-erő – vendéglátó állam – humanitárius szervezetek), a ROE-értelmezés egységesítése és a nem katonai (41. cikk) eszközök hasznosítása.
- A követő elemzésben a DCAP minden mérőszámához legyen külön ellenőrzött adatforrás.

## 11. Melléklet

A teljes folyamat-napló (481 bejegyzés) CSV és JSON formában letölthető az Adat és elemzés nézetből.
