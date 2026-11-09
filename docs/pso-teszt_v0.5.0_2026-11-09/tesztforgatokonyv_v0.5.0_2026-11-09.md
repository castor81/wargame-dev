# Teszt-forgatókönyv – scenario-betöltéses folyamat (v0.5.0 · 2026-11-09)

1. Új játék: a program üres (nincs scenario, injekt, válaszlehetőség; csak az „Egyéni opció” érhető el).
2. Scenario nézet (IGA/FOR/TER/FEJ): `scenarios/pso-eszak-volgy_v1.0_2026-11-09.json` betöltése (fájlból vagy „Minta” gombbal). Az üres mezők előtöltődnek (probléma, cél, célkitűzések, játékkörök, DCAP).
3. Scenario Brief gomb (fejléc): minden szerep látja; a játékirányítás (ctl) az injekt-ütemtervet és az elbírálási szempontokat is, a játékosok és a telefonos nézet nem.
4. 5. lépés kapuja: a Scenario ellenőrzés teljesítése (név, helyzet, küldetés, ≥3 KÉK/PIROS opció, ≥1 injekt).
5. Körökben: csapatonként eltérő válaszlehetőségek (Játéktér, telefon), injekt kiválasztása vagy egyéni szöveg.
6. A scenario a 8. lépés lezárásával zárolódik; változásai a folyamat-naplóban.
7. Szimulált teljes teszt (Adat nézet): üres indulás → betöltés → 18 lépés → napló + AAR.

Eredmény: lásd AAR és folyamat-napló ugyanebben a mappában.
