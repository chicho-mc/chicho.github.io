# 🪩 SUPERFUNK

A wildly over-decorated static page whose only job is to test **GitHub Pages**. Maximum groove, zero build step.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Markup + Google Fonts (Shrikhand / Bungee / Space Mono) |
| `styles.css` | All the funk: morphing gradient, grain, floating shapes, marquee |
| `script.js` | Custom cursor, the FUNK dial, emoji bursts, easter eggs |

## Try it locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo and push these files to the **root** (`index.html` must be at the top level).
   ```bash
   git init
   git add .
   git commit -m "🪩 funky test page"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to *Deploy from a branch*, pick `main` / `/ (root)`, and **Save**.
4. Wait ~1 minute, then visit `https://<you>.github.io/<repo>/`.

## Hidden grooves

- Drag the **FUNK LEVEL** dial — the whole page speeds up and saturates.
- Crank it to **100%** for a hue-spinning meltdown.
- **Click anywhere** for an emoji burst.
- Type **`funk`** on your keyboard for instant maximum funk.
- Honors `prefers-reduced-motion` for the motion-averse.
