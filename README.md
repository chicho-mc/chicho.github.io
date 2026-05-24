# 🪩 chicho

The official homepage of **chicho**. It is, by design, mostly just the word *chicho* — rendered as funkily as humanly possible. Zero build step.

## Files

| File | What it does |
|------|--------------|
| `index.html` | Markup + Google Fonts (Shrikhand / Bungee / Space Mono) |
| `styles.css` | All the funk: morphing gradient, grain, floating shapes, marquee |
| `script.js` | Custom cursor, the CHICHO dial, emoji bursts, easter eggs |

## Try it locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push these files to the **root** of a repo (`index.html` must be at the top level).
   For a homepage at `https://<you>.github.io/`, name the repo `<you>.github.io`.
   ```bash
   git init
   git add .
   git commit -m "🪩 chicho"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to *Deploy from a branch*, pick `main` / `/ (root)`, and **Save**.
4. Wait ~1 minute, then visit your site.

## Hidden grooves

- Drag the **CHICHO LEVEL** dial — the whole page speeds up and saturates.
- Crank it to **100%** for a hue-spinning meltdown.
- **Click anywhere** for an emoji burst.
- Type **`chicho`** on your keyboard for instant maximum chicho.
- Honors `prefers-reduced-motion` for the motion-averse.
