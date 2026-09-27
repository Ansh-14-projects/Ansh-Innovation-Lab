"use strict";

/* =========================================
   ANSH ROBOTICS LAB
   Main Website JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------
       YEAR
    ----------------------------------------- */

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* -----------------------------------------
       MOBILE MENU
    ----------------------------------------- */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");

            const isOpen = navMenu.classList.contains("show");

            menuButton.textContent = isOpen ? "×" : "☰";
        });

        navMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuButton.textContent = "☰";
            });

        });
    }


    /* -----------------------------------------
       PROJECT MODAL
    ----------------------------------------- */

    const projectModal = document.getElementById("projectModal");
    const modalClose = document.getElementById("modalClose");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    const projectDescriptions = {

        "VAJRA Drone":
            "VAJRA is a custom quadcopter robotics project using ESP32-C3 flight control, MPU6050 orientation sensing, ESC motor control and BLDC motors.",

        "VAJRA CITY":
            "VAJRA CITY is a browser-based open-world game project focused on creating an interactive city environment and gameplay system.",

        "VAJRA STRIKE":
            "VAJRA STRIKE is a futuristic action game project created with Godot, featuring missions, maps, vehicles and combat systems.",

        "ANSH AI":
            "ANSH AI is a personal artificial intelligence project exploring local AI models, Python applications and intelligent interfaces.",

        "ESP32 Lab":
            "The ESP32 Lab contains experiments with ESP32 microcontrollers, Bluetooth, sensors, displays, communication and embedded systems.",

        "Next Robot":
            "The Next Robot is a future robotics platform currently being explored through ideas, electronics experiments and software development."

    };


    document.querySelectorAll(".project-link").forEach((button) => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            const projectName = button.dataset.project;

            if (!projectName) {
                return;
            }

            if (modalTitle) {
                modalTitle.textContent = projectName;
            }

            if (modalText) {
                modalText.textContent =
                    projectDescriptions[projectName] ||
                    "Project information will be added soon.";
            }

            if (projectModal) {
                projectModal.classList.add("show");
                document.body.style.overflow = "hidden";
            }

        });

    });


    function closeModal() {

        if (projectModal) {
            projectModal.classList.remove("show");
        }

        document.body.style.overflow = "";
    }


    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }


    if (projectModal) {

        projectModal.addEventListener("click", (event) => {

            if (event.target === projectModal) {
                closeModal();
            }

        });

    }


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    /* -----------------------------------------
       EXPERIMENT DATABASE
    ----------------------------------------- */

    const experiments = [

        {
            title: "MPU6050 Orientation Test",
            text: "Testing accelerometer and gyroscope orientation data using an ESP32-C3 flight controller.",
            device: "MPU6050",
            status: "COMPLETED",
            result: "SUCCESS"
        },

        {
            title: "ESP32 BLE Communication",
            text: "Testing wireless Bluetooth Low Energy communication between a robotics controller and a computer interface.",
            device: "ESP32-C3",
            status: "COMPLETED",
            result: "SUCCESS"
        },

        {
            title: "ESC Motor Control",
            text: "Testing electronic speed controller signals and controlled motor startup behavior for a quadcopter system.",
            device: "30A ESC",
            status: "TESTING",
            result: "IN PROGRESS"
        },

        {
            title: "AI Local Model Test",
            text: "Testing a local AI model through a Python application and evaluating response speed and usability.",
            device: "LOCAL AI",
            status: "RESEARCH",
            result: "ANALYZING"
        }

    ];


    const experimentButtons =
        document.querySelectorAll(".experiment-item");

    const experimentTitle =
        document.getElementById("experimentTitle");

    const experimentText =
        document.getElementById("experimentText");

    const experimentDevice =
        document.getElementById("experimentDevice");

    const experimentStatus =
        document.getElementById("experimentStatus");

    const experimentResult =
        document.getElementById("experimentResult");


    function showExperiment(index) {

        const experiment = experiments[index];

        if (!experiment) {
            return;
        }

        if (experimentTitle) {
            experimentTitle.textContent = experiment.title;
        }

        if (experimentText) {
            experimentText.textContent = experiment.text;
        }

        if (experimentDevice) {
            experimentDevice.textContent = experiment.device;
        }

        if (experimentStatus) {
            experimentStatus.textContent = experiment.status;
        }

        if (experimentResult) {
            experimentResult.textContent = experiment.result;
        }

        experimentButtons.forEach((button, buttonIndex) => {

            button.classList.toggle(
                "active",
                buttonIndex === index
            );

        });

    }


    experimentButtons.forEach((button, index) => {

        button.addEventListener("click", () => {
            showExperiment(index);
        });

    });


    /* -----------------------------------------
       SCROLL REVEAL
    ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".project-card, .experiment-display, .experiment-item, .gallery-card, .technology-card, .about-box"
    );


    revealElements.forEach((element) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* -----------------------------------------
       PROJECT COUNTER
    ----------------------------------------- */

    const projectCount = document.getElementById("projectCount");

    if (projectCount) {

        let started = false;

        const counterObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting || started) {
                        return;
                    }

                    started = true;

                    let current = 0;
                    const target = 6;

                    const timer = setInterval(() => {

                        current++;

                        projectCount.textContent =
                            String(current).padStart(2, "0");

                        if (current >= target) {
                            clearInterval(timer);
                        }

                    }, 120);

                    counterObserver.unobserve(entry.target);

                });

            },
            {
                threshold: 0.8
            }
        );

        counterObserver.observe(projectCount);
    }


    /* -----------------------------------------
       ACTIVE NAVIGATION
    ----------------------------------------- */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            });

        },
        {
            threshold: 0.3
        }
    );


    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* -----------------------------------------
       MOUSE PARALLAX FOR HERO CORE
    ----------------------------------------- */

    const heroVisual = document.querySelector(".hero-visual");

    if (heroVisual && window.matchMedia("(pointer: fine)").matches) {

        heroVisual.addEventListener("mousemove", (event) => {

            const rect = heroVisual.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width - 0.5) * 12;

            const y =
                ((event.clientY - rect.top) / rect.height - 0.5) * 12;

            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        });


        heroVisual.addEventListener("mouseleave", () => {
            heroVisual.style.transform = "translate(0, 0)";
        });

    }


    /* -----------------------------------------
       CONSOLE MESSAGE
    ----------------------------------------- */

    console.log(
        "%c⚡ ANSH ROBOTICS LAB ONLINE",
        "color:#00eaff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cBUILD • EXPERIMENT • INNOVATE",
        "color:#39ff88;font-size:12px;"
    );

});
