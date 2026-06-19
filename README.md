# Kalaya - Tales of Fallen Gods

Static portfolio website for Kalaya - Tales of Fallen Gods, built with plain HTML, CSS and JavaScript for GitHub Pages.

## Editing Content

- Edit page text directly in `index.html`.
- Keep section ids such as `game`, `gameplay`, `world`, `gallery` and `contact` if you want the navigation to keep working.
- The final business email is currently `talesoffallengods@gmail.com`.

## Assets

```txt
assets/logo/        -> logos, character icon and studio logo
assets/screenshots/ -> screenshots, gallery images and og-image.png
assets/video/       -> gameplay/trailer video files or youtube.txt
assets/music/       -> site music for the play/pause button
assets/bg/          -> hero/background artwork
assets/icons/       -> small icons and favicon
assets/concept/     -> concept art and key art
```

## Background

The hero background currently uses:

```txt
assets/bg/hero-bg.png
```

Keep paths relative. Do not use `/assets/...`, because this site is expected to run under `/kalayagame` on GitHub Pages.

## Music

The floating music button uses:

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

## Video

To add gameplay video, use one of these options:

- Add `assets/video/youtube.txt` with a YouTube link.
- Add a local `.mp4` in `assets/video/`.
- Add `gameplay-thumb.jpg` or another thumbnail in `assets/video/` if you use local video.

Recommended local video size:

```txt
Ideal: 8-15 MB
Maximum recommended: 25 MB
Avoid above 50 MB
Never use above 100 MB
```

If no video exists, the site shows a polished "Gameplay video coming soon" fallback.

## Social Links

Social links are in the `Business / Contact` section of `index.html`.

Look for this comment:

```html
<!-- Edit these href values when official pages are available. -->
```

Replace `#` with the future Itch.io, Steam, YouTube, Instagram and Discord links.

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
