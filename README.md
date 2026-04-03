# 🏰 EMPYRIA — Build Your Emporium

A medieval idle game / Telegram Mini App. Mine resources, build your empire, earn $EMP tokens.

---

## 🚀 Deploy in 5 steps

### Step 1 — Create GitHub repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it `empyria` (or anything you like)
3. Set to **Public**
4. Click **Create repository**

### Step 2 — Upload files

Upload these 3 files to your repository:
- `index.html` — the game
- `tonconnect-manifest.json` — TON wallet config
- `icon.png` — app icon (512×512px, create one or use any image)

You can drag-and-drop them directly on GitHub.

### Step 3 — Enable GitHub Pages

1. In your repository → **Settings** → **Pages**
2. Under "Source" select: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Click **Save**
5. Wait ~1 minute → your game is live at:
   ```
   https://YOUR_USERNAME.github.io/empyria
   ```

### Step 4 — Update your username in the files

**In `index.html`** — find this line and replace `REPLACE_WITH_YOUR_USERNAME`:
```javascript
manifestUrl:'https://REPLACE_WITH_YOUR_USERNAME.github.io/empyria/tonconnect-manifest.json',
```

**In `tonconnect-manifest.json`** — replace all 3 occurrences of `REPLACE_WITH_YOUR_USERNAME`:
```json
{
  "url": "https://YOUR_USERNAME.github.io/empyria",
  "name": "Empyria",
  "iconUrl": "https://YOUR_USERNAME.github.io/empyria/icon.png",
  ...
}
```

Commit the changes.

### Step 5 — Create Telegram Bot + Mini App

1. Open Telegram → search **@BotFather**
2. Send `/newbot`
3. Choose a name (e.g. `Empyria Game`) and username (e.g. `EmpyriaGameBot`)
4. Save your **bot token**

5. Send `/newapp` in BotFather
6. Select your bot
7. Fill in:
   - **Title**: Empyria
   - **Description**: Build your medieval empire. Mine, build, earn $EMP.
   - **Photo**: upload a 512×512px image
   - **Web App URL**: `https://YOUR_USERNAME.github.io/empyria`
8. Done! Your Mini App is live.

**Set the menu button** (players see it at the bottom of chat):
- `/mybots` → select your bot → **Bot Settings → Menu Button**
- URL: `https://YOUR_USERNAME.github.io/empyria`
- Text: `🏰 Play Empyria`

---

## 💼 TON Wallet Integration

The wallet works **fully client-side** — no backend needed.

### What works now:
- ✅ Connect any TON wallet (Tonkeeper, MyTonWallet, etc.)
- ✅ Shows wallet address in game
- ✅ Shows real TON balance (via public TonCenter API)
- ✅ Shows earned $EMP linked to wallet
- ✅ Wallet ↔ Telegram user linked in localStorage

### What's needed later for real $EMP tokens:
When you want to distribute actual $EMP tokens on-chain, you'll need:
1. A **Jetton smart contract** on TON (your $EMP token)
2. A simple **claim backend** (can be a Cloudflare Worker — free tier is enough)
3. Players sign a claim transaction → backend verifies → sends tokens

For now, all $EMP is tracked locally. Players can see their balance and have their wallet registered. When you're ready to go on-chain, all the groundwork is in place.

---

## 📁 File structure

```
empyria/
├── index.html              ← The entire game (single file)
├── tonconnect-manifest.json ← Required by TON Connect
├── icon.png                ← App icon (512×512)
└── README.md               ← This file
```

---

## 🔧 Tech stack

| Layer | Technology |
|---|---|
| Game engine | Three.js r128 (CDN) |
| UI framework | Vanilla JS + CSS |
| Hosting | GitHub Pages (free) |
| Wallet | TON Connect 2.0 (CDN) |
| Telegram | WebApp SDK (CDN) |
| Storage | localStorage (no backend) |
| Fonts | Google Fonts CDN |

---

## 📱 Telegram Mini App tips

- The game auto-detects when running inside Telegram vs browser
- Back button is handled (closes panels/games in sequence)
- Haptic feedback fires on mining taps
- Colors match Telegram's dark theme

---

## 🗺️ Roadmap

- [ ] Real $EMP Jetton on TON mainnet
- [ ] Claim backend (Cloudflare Worker)
- [ ] Leaderboard (TON DNS / simple API)
- [ ] Multiplayer trading between players
- [ ] Prestige NFT badges

---

## 📄 License

MIT — do whatever you want with it.
