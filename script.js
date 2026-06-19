document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("site-music");
  const button = document.getElementById("music-toggle");

  if (!audio || !button) {
    return;
  }

  const source = audio.querySelector("source[src]");

  if (!source) {
    button.hidden = true;
    return;
  }

  audio.addEventListener("error", () => {
    button.hidden = true;
  });

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.textContent = "Pause Music";
      } catch {
        button.hidden = true;
      }
      return;
    }

    audio.pause();
    button.textContent = "Play Music";
  });
});
