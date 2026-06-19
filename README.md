# Kalaya - Tales of Fallen Gods

Estrutura do site estatico do jogo, preparada para GitHub Pages e para a futura geracao do site completo.

## Onde colocar os arquivos

```txt
assets/logo/        -> logos e favicon
assets/screenshots/ -> screenshots para galeria
assets/video/       -> gameplay/trailer leve ou youtube.txt
assets/music/       -> musicas do jogo para player do site
assets/bg/          -> backgrounds da hero/site
assets/icons/       -> icones
assets/concept/     -> concept art/key art
```

## Regras de video

```txt
Video local ideal: 8-15 MB
Maximo recomendado: 25 MB
Evitar acima de 50 MB
Nunca usar acima de 100 MB
```

## Regras de musica

```txt
Musica ideal: 2-8 MB
Maximo recomendado: 10 MB por faixa
Formatos: .mp3, .ogg ou .wav
Sem autoplay obrigatorio
```

O player do site deve usar um botao simples:

```txt
Play Music / Pause Music
```

A musica nao deve tocar automaticamente ao abrir o site. Ela deve comecar somente depois do clique do usuario.

## Regras de background

```txt
Imagem recomendada: .jpg, .png ou .webp
Nome recomendado: hero-bg.jpg
Usar imagem escura ou com espaco visual para texto
```

Se nao houver imagem em `assets/bg/`, use um fallback visual em CSS com gradiente escuro.

## Asset naming

Use nomes web seguros para todos os arquivos em `assets/`:

- lowercase
- no spaces
- no accents
- hyphen-separated
- short descriptive names

Exemplos:

```txt
kalaya-logo-orange.png
realtha-village-01.png
kalaya-character-landscape-01.png
og-image.png
kalaya-gameplay-final-01.mp4
kalaya-main-theme.wav
hero-bg.png
```

Novos assets devem seguir o mesmo padrao. Se houver conflito de nomes, adicione sufixos como `-01`, `-02` ou `-03`.

## O que nao colocar neste repositorio

```txt
build do jogo
.uproject
codigo fonte do jogo
pasta Content da Unreal
assets crus confidenciais
documentos financeiros
contratos
pitch deck confidencial
arquivos gigantes
```
