document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = document.querySelectorAll(".site-nav a");
  const backToTop = document.querySelector("[data-back-to-top]");
  const audio = document.getElementById("site-music");
  const musicButton = document.getElementById("music-toggle");
  const musicLabel = musicButton ? musicButton.querySelector(".music-label") : null;
  const lightbox = document.querySelector("[data-lightbox-modal]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxCaption = document.querySelector("[data-lightbox-caption]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");
  const galleryItems = document.querySelectorAll("[data-lightbox]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        event.preventDefault();
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 700);
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (audio && musicButton) {
    const source = audio.querySelector("source[src]");

    if (!source) {
      musicButton.hidden = true;
    } else {
      const setPlayingState = (isPlaying) => {
        musicButton.classList.toggle("is-playing", isPlaying);
        musicButton.setAttribute("aria-label", isPlaying ? "Pause music" : "Play music");

        if (musicLabel) {
          musicLabel.textContent = isPlaying ? "Pause Music" : "Play Music";
        }
      };

      audio.addEventListener("error", () => {
        musicButton.hidden = true;
      });

      audio.addEventListener("pause", () => setPlayingState(false));
      audio.addEventListener("play", () => setPlayingState(true));

      musicButton.addEventListener("click", async () => {
        if (audio.paused) {
          try {
            await audio.play();
          } catch {
            musicButton.hidden = true;
          }
          return;
        }

        audio.pause();
      });
    }
  }

  const closeLightbox = () => {
    if (!lightbox || !lightboxImage) {
      return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.setAttribute("src", "");
    lightboxImage.setAttribute("alt", "");
  };

  if (lightbox && lightboxImage && lightboxCaption) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const imageSrc = item.getAttribute("data-lightbox");
        const imageTitle = item.getAttribute("data-title") || "";
        const thumbnail = item.querySelector("img");

        if (!imageSrc) {
          return;
        }

        lightboxImage.setAttribute("src", imageSrc);
        lightboxImage.setAttribute("alt", thumbnail ? thumbnail.alt : imageTitle);
        lightboxCaption.textContent = imageTitle;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        if (lightboxClose) {
          lightboxClose.focus();
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
    });
  });
});
