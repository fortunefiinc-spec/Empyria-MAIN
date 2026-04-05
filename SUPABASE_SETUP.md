# 🗄️ Supabase Database Setup — Empyria

## Wat je krijgt
- ☁️ Cloud saves — spelers verliezen nooit hun voortgang
- 🏆 Leaderboard — top 100 spelers op $EMP
- 📊 Mini-game scores bijgehouden
- 💼 Wallet addresses gekoppeld aan Telegram IDs
- 🔄 Automatische sync elke 2 minuten

---

## Stap 1 — Supabase account aanmaken

1. Ga naar [supabase.com](https://supabase.com)
2. Klik **Start your project** → log in met GitHub
3. Klik **New project**
4. Vul in:
   - **Name**: empyria
   - **Database Password**: kies een sterk wachtwoord (bewaar dit!)
   - **Region**: kies dichtstbijzijnde (bijv. West EU)
5. Klik **Create new project** — wacht ~2 minuten

---

## Stap 2 — Database schema aanmaken

1. In je Supabase project → **SQL Editor** (linkermenu)
2. Klik **New query**
3. Kopieer de hele inhoud van **`schema.sql`** en plak die hier
4. Klik **Run** (of Ctrl+Enter)
5. Je ziet: "Success. No rows returned"

---

## Stap 3 — Je API keys ophalen

1. In Supabase → **Settings** → **API**
2. Kopieer:
   - **Project URL** → ziet eruit als `https://abcdefgh.supabase.co`
   - **anon / public key** → lange string die begint met `eyJ...`

---

## Stap 4 — Keys invullen in index.html

Open `index.html` en zoek deze twee regels (bovenaan het script):

```javascript
const SUPABASE_URL  = 'REPLACE_WITH_YOUR_SUPABASE_URL';
const SUPABASE_ANON = 'REPLACE_WITH_YOUR_SUPABASE_ANON_KEY';
```

Vervang de placeholders:

```javascript
const SUPABASE_URL  = 'https://abcdefgh.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Commit en push naar GitHub.

---

## Stap 5 — Testen

1. Open je game: `https://fortunefiinc-spec.github.io/empyria`
2. Bovenin zie je een **☁️** icoontje — dat is de cloud sync indicator
3. Start het spel → na 3 seconden wordt je profiel aangemaakt
4. Tik op ☁️ → opent het **leaderboard**
5. In Supabase → **Table Editor** → `players` tabel → je ziet je eigen rij!

---

## Wat er automatisch gebeurt

| Event | Actie |
|---|---|
| Spel gestart | Laad save van cloud (als hoger dan lokaal) |
| Elke 2 minuten | Sync game state + EMP balans naar DB |
| Mini-game gespeeld | Score opgeslagen in `scores` tabel |
| Wallet verbonden | Wallet address opgeslagen in DB |
| ☁️ tik | Leaderboard toont top 10 spelers |

---

## Supabase gratis tier limieten

| Wat | Limiet | Voldoende voor |
|---|---|---|
| Database | 500 MB | ~1 miljoen spelers |
| API calls | 2 miljoen/maand | ~10k actieve spelers |
| Realtime connections | 200 gelijktijdig | Prima voor launch |
| Projecten | 2 gratis | Genoeg |

---

## Data veiligheid

- De **anon key** is veilig om in de browser te tonen — hij geeft alleen de rechten die RLS policies toestaan
- Spelers kunnen alleen **hun eigen** game state schrijven
- Het **leaderboard** is publiek leesbaar voor iedereen
- Wachtwoorden of gevoelige data worden nergens opgeslagen

---

## Volgende stap: eigen domein

Als je een eigen domein wil (bijv. `play.empyria.fun`):

1. Koop domein bij Cloudflare Registrar (~€8-12/jaar)
2. In Cloudflare DNS → voeg `CNAME` toe:
   - Name: `play`
   - Target: `fortunefiinc-spec.github.io`
3. In GitHub repo → Settings → Pages → Custom domain: `play.empyria.fun`
4. Cloudflare SSL staat automatisch aan ✅
5. Update `tonconnect-manifest.json` en `index.html` met nieuwe URL
