"use strict";

/* =========================================
   ANSH ROBOTICS LAB
   Navigation, theme, video and interactions
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // -----------------------------------------
  // FOOTER YEAR
  // -----------------------------------------

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // -----------------------------------------
  // LIGHT / DARK THEME
  // -----------------------------------------

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const THEME_KEY = "anshLabTheme";

  function applyTheme(theme) {
    const isLight = theme === "light";

    body.classList.toggle("light-mode", isLight);

    if (themeIcon) {
      themeIcon.textContent = isLight ? "🌙" : "☀️";
    }

    if (themeLabel) {
      themeLabel.textContent = isLight ? "Dark Mode" : "Light Mode";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark mode" : "Switch to light mode"
      );
    }

    if (themeColor) {
      themeColor.setAttribute(
        "content",
        isLight ? "#f4f7fc" : "#080d18"
      );
    }
  }

  function getSavedTheme() {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);

      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    } catch (error) {
      console.warn("Theme preference could not be loaded.", error);
    }

    return "dark";
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  }

  applyTheme(getSavedTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.classList.contains("light-mode")
        ? "dark"
        : "light";

      applyTheme(nextTheme);
      saveTheme(nextTheme);
    });
  }

  // -----------------------------------------
  // MOBILE NAVIGATION
  // -----------------------------------------

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  function closeMenu() {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  function openMenu() {
    if (!menuToggle || !navMenu) return;

    navMenu.classList.add("open");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedMenuButton = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        closeMenu();
      }
    });
  }

  // -----------------------------------------
  // ACTIVE NAVIGATION LINK
  // -----------------------------------------

  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const sectionId = entry.target.id;

          navLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle("active", isActive);
          });
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // -----------------------------------------
  // BACK TO TOP BUTTON
  // -----------------------------------------

  const backToTop = document.getElementById("backToTop");

  function updateBackToTop() {
    if (!backToTop) return;

    backToTop.classList.toggle(
      "visible",
      window.scrollY > 450
    );
  }

  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  updateBackToTop();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // -----------------------------------------
  // OPTIONAL FEATURED YOUTUBE VIDEO
  // -----------------------------------------

  /*
    To show a featured YouTube video:

    1. Open the YouTube video.
    2. Copy its video ID from the URL.

       Example:
       https://www.youtube.com/watch?v=VIDEO_ID_HERE

    3. Paste the ID below.

    Leave it empty to show the placeholder.
  */

  const FEATURED_VIDEO_ID = "";

  const videoScreen = document.getElementById("videoScreen");

  function isValidYouTubeId(id) {
    return /^[a-zA-Z0-9_-]{11}$/.test(id);
  }

  if (
    videoScreen &&
    FEATURED_VIDEO_ID &&
    isValidYouTubeId(FEATURED_VIDEO_ID)
  ) {
    const iframe = document.createElement("iframe");

    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(FEATURED_VIDEO_ID);

    iframe.title = "Featured Ansh Robotics Lab YouTube video";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.allowFullscreen = true;

    videoScreen.replaceChildren(iframe);
  }

  // -----------------------------------------
  // REVEAL ANIMATIONS
  // -----------------------------------------

  const revealElements = document.querySelectorAll(
    ".project-card, .experiment-card, .gallery-item, .video-feature, .video-sidebar"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-ready");
      revealObserver.observe(element);
    });
  }
});
