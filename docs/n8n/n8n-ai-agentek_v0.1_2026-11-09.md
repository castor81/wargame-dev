# Wargame Studio – N8N AI-ügynök workflow-k (v0.1 · 2026-11-09)

Állapot: **piszkozat, nem publikált** (castor81.app.n8n.cloud).

| Workflow | ID | Webhook útvonal |
|---|---|---|
| Wargame Studio – AI-ülés döntés v0.1 (piszkozat) | pUGwpChRAQLSJLpp | POST `/webhook/wargame-ai-decision` |
| Wargame Studio – elbírálás-támogatás v0.1 (piszkozat) | 0L06vcTTTrWDthDr | POST `/webhook/wargame-ai-adjudication` |

## Publikálás előtt (kötelező)
1. Mindkét webhook csomópontnál a „Header Auth” hitelesítőt cseréld egy **dedikált** hitelesítőre (név: `X-WG-Key`, érték: saját titkos kulcs). A mentéskor automatikusan egy idegen hitelesítő (OpenAI Realtime Bearer) rendelődött hozzá – ezt le kell cserélni.
2. Az „OpenAI modell” csomópontnál ellenőrizd a hitelesítőt (jelenleg az n8n ingyenes OpenAI-kreditje); helyi/on-prem modellhez cseréld a modell-csomópontot.
3. Az alkalmazás IGA-nézetében (Játékosok fül → Élő AI-ügynökök) add meg a production webhook-címet és a kulcsot.

## Kérés (döntés)
`{kind:'decision', room, seat:{id,fn,team}, turn, prompt, brief, inject, friction, options:[{label}], state, history[], model?}`

Válasz: `{ok:true, seat, turn, model, decision:{act, custom, sec, why}}` vagy `{ok:false, error}` (502).

## Kérés (elbírálás-támogatás)
`{kind:'adjudication', room, team, turn, method, inject, brief, criteria, orders:[{seat,act,sec,why}], model?}`

Válasz: `{ok:true, team, turn, model, proposal:{res:'Siker|Részleges|Kudarc', why}}`.

## Biztonság
- A látótér szűrt: csak a saját csapat adatai mennek ki.
- Az alkalmazás az AI-választ ellenőrzi (opció, szektor, indoklás); hibánál szimulált tartalék-javaslat, jelölve.
- Az aktiválás UI-zár (kód + kétszeres megerősítés), nem biztonsági határ; a tényleges védelem a webhook-kulcs.
