# Kalaya - Tales of Fallen Gods

Static bilingual portfolio website for Kalaya - Tales of Fallen Gods, built with plain HTML, CSS and JavaScript for GitHub Pages.

## Languages

The site supports:

- English
- Portuguese (Brazil)

The language selector is in the header. It uses simple JavaScript and stores the visitor choice in:

```txt
localStorage["kalaya-language"]
```

To edit translated text, open `script.js` and update the `translations` object.

To connect a visible element to a translation key, use:

```html
data-i18n="section.key"
```

For translated aria labels, use:

```html
data-i18n-aria="section.key"
```

## Editing Content

- Main layout lives in `index.html`.
- Visual styling lives in `style.css`.
- Language switching, music controls, mobile menu, smooth scroll and lightbox live in `script.js`.
- Keep section ids such as `game`, `gameplay`, `music`, `world`, `gallery` and `contact` if you want navigation to keep working.

## Social Links

Official links are in the `Business / Contact` section of `index.html`.

Current links:

```txt
Steam:     https://store.steampowered.com/developer/NeanderthalGames
Discord:   https://discord.gg/hzAZAQFkbS
Itch.io:   https://neanderthalgames.itch.io/kalaya-tofg-demo
YouTube:   https://www.youtube.com/@NeanderthalGames
Instagram: https://www.instagram.com/neanderthalgames/
Email:     talesoffallengods@gmail.com
```

Update the `href` values in `index.html` if these change later.

## Assets

```txt
assets/logo/        -> logos, character icon and studio logo
assets/screenshots/ -> screenshots, gallery images and og-image.png
assets/video/       -> gameplay/trailer video files or youtube.txt
assets/music/       -> site music for the dedicated music section
assets/bg/          -> hero/background artwork
assets/icons/       -> small icons and favicon
assets/concept/     -> concept art and key art
```

## Adding Images

The gallery is manually organized in `index.html` into:

- Screenshots
- Concept Art
- Brand Assets

To add an image:

1. Place the file in the correct folder under `assets/`.
2. Add a new `.gallery-item` button in the right gallery block.
3. Set `data-lightbox` to the image path.
4. Add `data-title-en`, `data-title-pt`, `data-alt-en` and `data-alt-pt`.
5. Keep paths relative, such as `assets/screenshots/new-image.png`.

Do not use `/assets/...`, because this site is expected to run under `/kalayagame` on GitHub Pages.

## Background

The hero background currently uses:

```txt
assets/bg/hero-bg.png
```

Change the `background-image` in `style.css` if you replace the hero background.

## Music

The music section currently uses:

```txt
assets/music/kalaya-main-theme.wav
```

Rules:

- no autoplay
- starts only after user click
- accepted formats: `.mp3`, `.ogg`, `.wav`
- recommended size: 2-8 MB
- maximum recommended size: 10 MB per track

The current `.wav` file is larger than ideal. A smaller `.mp3` or `.ogg` is recommended before publishing widely.

To change the track, update the `<source>` inside the `site-music` audio element in `index.html`.

## Video

To add gameplay video, use one of these options:

- Add `assets/video/youtube.txt` with a YouTube link, then replace the fallback block in `index.html` with an embed.
- Add a local `.mp4` in `assets/video/` and use `<video controls>`.
- Add `gameplay-thumb.jpg` or another thumbnail in `assets/video/` if you use local video.

The current gameplay section uses the YouTube link stored in:

```txt
assets/video/youtube.txt
```

Recommended local video size:

```txt
Ideal: 8-15 MB
Maximum recommended: 25 MB
Avoid above 50 MB
Never use above 100 MB
```

If no video exists, the site shows a polished "Gameplay video coming soon" fallback.

## Asset Naming

Use web-safe names for new assets:

- lowercase
- no spaces
- no accents
- hyphen-separated
- short descriptive names

Examples:

```txt
kalaya-logo-orange.png
realtha-village-01.png
kalaya-character-landscape-01.png
og-image.png
kalaya-main-theme.wav
hero-bg.png
```

## GitHub Pages

This repository is intended for a GitHub Pages project site, likely:

```txt
https://thebeniex.github.io/kalayagame
```

Publishing checklist:

1. Push the repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Select the `main` branch.
5. Use the root folder.
6. Save and wait for GitHub Pages to build.

All asset paths should stay relative so the site works from `/kalayagame`.

## Press Kit

There is no press kit section yet.

Do not add a `Download Press Kit` button until the press kit is ready.

## Do Not Commit

```txt
game builds
.uproject
game source code
Unreal Content folder
confidential raw assets
financial documents
contracts
confidential pitch decks
huge files
```
