
/*
  ANSH ROBOTICS LAB
  Website interactions

  To embed a YouTube video:
  1. Open the YouTube video.
  2. Copy its URL.
  3. Find the video ID.

  Example:
  https://www.youtube.com/watch?v=ABC123xyz
  Video ID = ABC123xyz

  Paste that ID into FEATURED_VIDEO_ID below.
*/

const FEATURED_VIDEO_ID = ""; // Example: "ABC123xyz"

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active navigation link
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, {
      rootMargin: "-25% 0px -60% 0px"
    });

    sections.forEach(section => observer.observe(section));
  }

  // Simulated terminal experiments
  const experiments = {
    boot: {
      command: "system boot",
      output: `INITIALIZING ANSH ROBOTICS LAB...

[OK] Interface loaded
[OK] Experiment console ready
[OK] Robotics systems simulated

STATUS: READY FOR EXPERIMENTS`
    },

    sensor: {
      command: "sensor scan --demo",
      output: `STARTING SENSOR DIAGNOSTIC...

[OK] MPU6050 - DEMO READY
[OK] Ultrasonic sensor - DEMO READY
[OK] Light sensor - DEMO READY

NOTE: SIMULATED RESULTS
STATUS: SCAN COMPLETE`
    },

    flight: {
      command: "vajra flight-check --demo",
      output: `VAJRA FLIGHT SYSTEM CHECK...

[OK] Flight controller concept
[OK] ESC configuration concept
[OK] Telemetry interface concept

WARNING: SIMULATION ONLY
NO MOTORS OR HARDWARE CONTROLLED`
    },

    ai: {
      command: "ai diagnostic --demo",
      output: `ANSH AI DIAGNOSTIC...

[OK] Interface initialized
[OK] AI module concept loaded
[OK] Diagnostic display ready

STATUS: DEMONSTRATION COMPLETE`
    }
  };

  const terminalCommand = document.getElementById("terminalCommand");
  const terminalText = document.getElementById("terminalText");
  const experimentButtons = document.querySelectorAll(".experiment-option");

  experimentButtons.forEach(button => {
    button.addEventListener("click", () => {
      const experiment = experiments[button.dataset.experiment];
      if (!experiment) return;

      experimentButtons.forEach(item => {
        item.classList.toggle("selected", item === button);
      });

      terminalCommand.textContent = experiment.command;
      terminalText.textContent = "RUNNING DEMONSTRATION...";

      window.setTimeout(() => {
        terminalText.textContent = experiment.output;
      }, 250);
    });
  });

  // Project details
  const projectDetails = {
    vajra: {
      title: "VAJRA",
      description: "A custom drone development project exploring flight-controller concepts, MPU6050 sensor readings, ESC signals, telemetry and wireless communication. Test physical flight systems safely and separately from this website.",
      tags: ["ESP32-C3", "MPU6050", "DRONES", "EMBEDDED"]
    },

    city: {
      title: "VAJRA CITY",
      description: "A browser-based game development project focused on creating an interactive city environment and experimenting with web technologies.",
      tags: ["JAVASCRIPT", "HTML", "CSS", "GAMES"]
    },

    strike: {
      title: "VAJRA STRIKE",
      description: "A Godot game project exploring scenes, player movement, weapons, enemies, vehicles and map design.",
      tags: ["GODOT", "GDSCRIPT", "GAME DEV"]
    },

    ai: {
      title: "ANSH AI",
      description: "A personal AI assistant experiment using Python, a local language model and a custom interface.",
      tags: ["PYTHON", "OLLAMA", "AI"]
    },

    esp: {
      title: "ESP32 LAB",
      description: "A collection of microcontroller experiments involving sensors, Bluetooth, Wi-Fi, displays and electronic modules.",
      tags: ["ESP32", "ARDUINO", "IOT"]
    }
  };

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTags = document.getElementById("modalTags");
  const modalClose = document.getElementById("modalClose");
  const modalDone = document.getElementById("modalDone");

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
      const project = projectDetails[button.dataset.project];
      if (!project || !modal) return;

      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalTags.replaceChildren();

      project.tags.forEach(tag => {
        const element = document.createElement("span");
        element.textContent = tag;
        modalTags.appendChild(element);
      });

      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      modalClose.focus();
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalDone) modalDone.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal?.classList.contains("open")) {
      closeModal();
    }
  });

  // YouTube featured video
  const videoFrame = document.getElementById("videoFrame");

  function isValidYouTubeId(id) {
    return /^[a-zA-Z0-9_-]{11}$/.test(id);
  }

  if (videoFrame && isValidYouTubeId(FEATURED_VIDEO_ID)) {
    const iframe = document.createElement("iframe");

    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(FEATURED_VIDEO_ID);

    iframe.title = "Ansh's Innovation Lab YouTube video";
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    videoFrame.replaceChildren(iframe);
  }
});
