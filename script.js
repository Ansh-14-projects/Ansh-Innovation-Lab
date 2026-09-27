
:root {
  --bg: #070b14;
  --panel: #0c1322;
  --panel-light: #101c30;
  --text: #eef6ff;
  --muted: #91a3bb;
  --cyan: #38e8ff;
  --blue: #6477ff;
  --purple: #a16cff;
  --border: rgba(122, 179, 255, .16);
  --font-heading: "Orbitron", sans-serif;
  --font-body: "Rajdhani", sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 95px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 18px;
  overflow-x: hidden;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

button:focus-visible, a:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 5px;
}

.background-grid {
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(75, 128, 180, .055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(75, 128, 180, .055) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
}

.glow {
  position: fixed;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .13;
  z-index: -2;
  pointer-events: none;
}

.glow-one {
  background: var(--cyan);
  top: 10%;
  left: -250px;
}

.glow-two {
  background: var(--purple);
  top: 55%;
  right: -260px;
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 82px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: rgba(7, 11, 20, .88);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(18px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
  white-space: nowrap;
}

.logo-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  color: #07101a;
  background: var(--cyan);
  clip-path: polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%);
  font-size: 21px;
}

.accent {
  color: var(--cyan);
}

.nav {
  display: flex;
  gap: 27px;
  align-items: center;
}

.nav-link {
  color: var(--muted);
  font-size: 16px;
  transition: color .2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--cyan);
}

.header-button {
  border: 1px solid rgba(56, 232, 255, .4);
  padding: 9px 16px;
  border-radius: 4px;
  color: var(--cyan);
  font-weight: 700;
}

.header-button span {
  margin-left: 8px;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px;
  background: var(--cyan);
}

.section {
  width: min(1180px, 86%);
  margin: 0 auto;
  padding: 110px 0;
}

.hero {
  min-height: 690px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  align-items: center;
  gap: 30px;
  padding-top: 85px;
}

.eyebrow {
  color: var(--cyan);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.3px;
  margin-bottom: 20px;
}

.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: var(--cyan);
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: 0 0 12px var(--cyan);
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: clamp(34px, 4.5vw, 61px);
  line-height: 1.25;
  letter-spacing: -1.7px;
  font-weight: 800;
}

.gradient-text {
  background: linear-gradient(100deg, var(--cyan), #7294ff 55%, #bd8aff);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.hero-description {
  max-width: 540px;
  margin-top: 24px;
  color: var(--muted);
  font-size: 21px;
}

.hero-buttons,
.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 21px;
  border-radius: 4px;
  font-weight: 700;
  transition: transform .2s, box-shadow .2s, background .2s;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-3px);
}

.button-primary {
  background: var(--cyan);
  color: #06101b;
  box-shadow: 0 0 22px rgba(56, 232, 255, .12);
  border: 1px solid var(--cyan);
}

.button-primary:hover {
  box-shadow: 0 0 28px rgba(56, 232, 255, .3);
}

.button-secondary {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255, 255, 255, .02);
}

.hero-stats {
  display: flex;
  gap: 42px;
  margin-top: 55px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
}

.hero-stats strong {
  color: var(--cyan);
  font: 700 25px var(--font-heading);
}

.hero-stats span {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 1.4px;
}

.hero-visual {
  min-height: 480px;
  display: grid;
  place-items: center;
  position: relative;
}

.hero-core {
  width: 210px;
  height: 210px;
  border: 1px solid rgba(56, 232, 255, .7);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle, rgba(56, 232, 255, .15), transparent 70%);
  box-shadow: 0 0 60px rgba(56, 232, 255, .08), inset 0 0 35px rgba(56, 232, 255, .08);
  animation: corePulse 4s ease-in-out infinite;
}

.core-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.core-symbol {
  font: 800 88px var(--font-heading);
  color: var(--cyan);
  line-height: 1;
  text-shadow: 0 0 30px rgba(56, 232, 255, .6);
}

.core-label {
  font: 700 10px var(--font-heading);
  letter-spacing: 2px;
}

.orbit {
  position: absolute;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(100, 119, 255, .3);
  border-radius: 50%;
}

.orbit-one {
  transform: rotateX(65deg) rotateZ(20deg);
  animation: orbitSpin 20s linear infinite;
}

.orbit-two {
  width: 400px;
  height: 400px;
  transform: rotateX(65deg) rotateZ(-40deg);
  border-color: rgba(56, 232, 255, .25);
  animation: orbitSpin 27s linear infinite reverse;
}

.orbit-three {
  width: 270px;
  height: 270px;
  border-style: dashed;
  border-color: rgba(177, 122, 255, .35);
  animation: orbitSpin 35s linear infinite;
}

.floating-card {
  position: absolute;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 13px 17px;
  background: rgba(12, 19, 34, .95);
  border: 1px solid var(--border);
  box-shadow: 0 12px 35px rgba(0, 0, 0, .25);
  border-radius: 6px;
  animation: float 4s ease-in-out infinite;
}

.floating-card-top {
  top: 65px;
  right: -5px;
}

.floating-card-bottom {
  bottom: 65px;
  left: -15px;
  animation-delay: -2s;
}

.mini-icon {
  color: var(--cyan);
  font-size: 26px;
}

.floating-card strong,
.floating-card small {
  display: block;
}

.floating-card strong {
  font: 700 10px var(--font-heading);
}

.floating-card small {
  color: var(--cyan);
  font-size: 11px;
}

.orbit-label {
  position: absolute;
  color: #71839d;
  font: 9px var(--font-heading);
  letter-spacing: 2px;
}

.label-one {
  top: 100px;
  left: 25px;
}

.label-two {
  bottom: 105px;
  right: 0;
}

@keyframes orbitSpin {
  to { transform: rotateX(65deg) rotateZ(380deg); }
}

@keyframes float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -10px; }
}

@keyframes corePulse {
  0%, 100% { box-shadow: 0 0 45px rgba(56, 232, 255, .08); }
  50% { box-shadow: 0 0 75px rgba(56, 232, 255, .18); }
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 35px;
  margin-bottom: 42px;
}

.section-heading h2,
.about-content h2,
.contact-box h2 {
  font: 700 clamp(28px, 4vw, 43px)/1.3 var(--font-heading);
  letter-spacing: -1px;
}

.section-heading > p {
  max-width: 350px;
  color: var(--muted);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.project-card {
  min-width: 0;
  overflow: hidden;
  background: rgba(12, 19, 34, .82);
  border: 1px solid var(--border);
  border-radius: 7px;
  transition: transform .25s, border-color .25s;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(56, 232, 255, .55);
}

.project-art {
  height: 205px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #0b1729;
}

.project-art::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(56,232,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,232,255,.05) 1px, transparent 1px);
  background-size: 22px 22px;
}

.art-tag,
.art-number {
  position: absolute;
  z-index: 2;
  color: var(--cyan);
  font: 9px var(--font-heading);
  letter-spacing: 1.3px;
}

.art-tag {
  top: 17px;
  left: 18px;
}

.art-number {
  bottom: 12px;
  right: 17px;
  color: rgba(255,255,255,.4);
  font-size: 15px;
}

.art-drone { background: radial-gradient(circle, #123b4b, #091221 70%); }
.art-city { background: linear-gradient(150deg, #131c42, #0a1120); }
.art-strike { background: radial-gradient(circle, #34234e, #0b1120 70%); }
.art-ai { background: radial-gradient(circle, #103d48, #0a1120 70%); }
.art-esp { background: radial-gradient(circle, #263354, #0a1120 70%); }
.art-next { background: radial-gradient(circle, #25203c, #0a1120 70%); }

.drone-graphic {
  position: relative;
  width: 190px;
  height: 100px;
  z-index: 1;
}

.drone-arm {
  position: absolute;
  height: 8px;
  width: 145px;
  background: linear-gradient(90deg, #5a718e, var(--cyan), #5a718e);
  top: 46px;
  left: 22px;
  border-radius: 8px;
}

.arm-a { transform: rotate(32deg); }
.arm-b { transform: rotate(-32deg); }

.drone-body {
  position: absolute;
  width: 50px;
  height: 40px;
  top: 30px;
  left: 70px;
  display: grid;
  place-items: center;
  background: #102e41;
  color: var(--cyan);
  border: 1px solid var(--cyan);
  border-radius: 9px;
  font: 800 24px var(--font-heading);
}

.rotor {
  position: absolute;
  width: 43px;
  height: 43px;
  border: 2px solid var(--cyan);
  border-radius: 50%;
  box-shadow: 0 0 13px rgba(56,232,255,.3);
}

.rotor-a { top: 0; left: 0; }
.rotor-b { top: 0; right: 0; }
.rotor-c { bottom: 0; left: 0; }
.rotor-d { bottom: 0; right: 0; }

.city-scene {
  position: absolute;
  inset: 60px 10px 0;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 7px;
}

.city-scene i {
  display: block;
  width: 28px;
  background: linear-gradient(#4259a2, #10172e);
  border: 1px solid #6176ca;
  height: 65px;
}

.city-scene i:nth-child(2),
.city-scene i:nth-child(5) { height: 100px; }
.city-scene i:nth-child(3) { height: 125px; }
.city-scene i:nth-child(4) { height: 82px; }

.target-rings {
  width: 125px;
  height: 125px;
  border: 1px solid #b17aff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #c49bff;
  font: 700 45px var(--font-heading);
  box-shadow: 0 0 45px rgba(161,108,255,.15), inset 0 0 35px rgba(161,108,255,.1);
}

.target-rings::before,
.target-rings::after {
  content: "";
  position: absolute;
  width: 90px;
  height: 90px;
  border: 1px dashed #b17aff;
  border-radius: 50%;
}

.target-rings::after { width: 160px; height: 160px; }

.ai-orb {
  width: 115px;
  height: 115px;
  display: grid;
  place-items: center;
  border: 1px solid var(--cyan);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56,232,255,.25), transparent 70%);
  box-shadow: 0 0 35px rgba(56,232,255,.15);
  font: 700 32px var(--font-heading);
  color: var(--cyan);
}

.chip {
  width: 125px;
  height: 100px;
  background: linear-gradient(135deg, #26395a, #111c32);
  border: 2px solid #7b9aff;
  box-shadow: 0 0 30px rgba(100,119,255,.2);
  display: grid;
  place-items: center;
  position: relative;
  color: #c5d5ff;
  font: 700 15px var(--font-heading);
}

.chip i {
  position: absolute;
  inset: -12px;
  border: 1px dashed #6477ff;
}

.question-mark {
  font: 700 100px var(--font-heading);
  color: #a78bfa;
  text-shadow: 0 0 40px rgba(161,108,255,.5);
}

.project-info {
  padding: 23px;
}

.project-category {
  color: var(--cyan);
  font-size: 10px;
  letter-spacing: 1.5px;
}

.project-info h3 {
  font: 700 23px var(--font-heading);
  margin: 8px 0;
}

.project-info p {
  color: var(--muted);
  min-height: 82px;
  font-size: 17px;
}

.text-button {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 19px;
  border: 0;
  background: transparent;
  color: var(--cyan);
  font-weight: 700;
  cursor: pointer;
}

.text-button:hover span {
  transform: translate(3px, -3px);
}

.text-button span {
  transition: transform .2s;
}

.experiments-section {
  width: 100%;
  padding-left: 7%;
  padding-right: 7%;
  background: linear-gradient(180deg, transparent, rgba(13, 25, 44, .6), transparent);
}

.experiments-section .section-heading,
.experiments-section .terminal,
.experiments-section .fine-print {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.terminal {
  border: 1px solid rgba(56,232,255,.3);
  border-radius: 7px;
  overflow: hidden;
  background: rgba(5, 10, 19, .95);
  box-shadow: 0 20px 70px rgba(0,0,0,.25);
}

.terminal-top {
  min-height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: #101827;
  border-bottom: 1px solid var(--border);
  color: #9baec6;
  font: 10px var(--font-heading);
  letter-spacing: 1px;
}

.terminal-dots {
  display: flex;
  gap: 6px;
}

.terminal-dots i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff657a;
}

.terminal-dots i:nth-child(2) { background: #ffca66; }
.terminal-dots i:nth-child(3) { background: #4de0a2; }
.terminal-status { color: #4de0a2; }

.terminal-body {
  display: grid;
  grid-template-columns: 245px 1fr;
  min-height: 285px;
}

.terminal-sidebar {
  padding: 20px 12px;
  border-right: 1px solid var(--border);
}

.experiment-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 13px 12px;
  margin-bottom: 6px;
  background: transparent;
  color: var(--muted);
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
}

.experiment-option.selected,
.experiment-option:hover {
  color: var(--cyan);
  background: rgba(56,232,255,.06);
  border-color: rgba(56,232,255,.15);
}

.terminal-output {
  padding: 30px;
  font-family: monospace;
  font-size: 13px;
  overflow-wrap: anywhere;
}

.terminal-prompt { color: var(--cyan); }
.terminal-output pre {
  white-space: pre-wrap;
  color: #b7c7d8;
  margin-top: 20px;
  line-height: 2;
  font: inherit;
}

.terminal-cursor {
  color: var(--cyan);
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink { to { visibility: hidden; } }

.fine-print {
  color: #71839b;
  font-size: 13px;
  margin-top: 14px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  grid-template-rows: 180px 180px;
  gap: 15px;
}

.gallery-item {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 6px;
}

.gallery-large {
  grid-row: span 2;
}

.gallery-art {
  width: 100%;
  height: 100%;
  min-height: 180px;
  position: relative;
  display: flex;
  align-items: end;
  padding: 20px;
  overflow: hidden;
  background-image:
    linear-gradient(145deg, rgba(56,232,255,.08), transparent),
    linear-gradient(rgba(56,232,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56,232,255,.05) 1px, transparent 1px);
  background-size: auto, 25px 25px, 25px 25px;
  background-color: #0b1729;
  transition: transform .3s;
}

.gallery-item:hover .gallery-art { transform: scale(1.04); }
.gallery-art-one { background-color: #0b2535; }
.gallery-art-two { background-color: #171c36; }
.gallery-art-three { background-color: #122c2f; }
.gallery-art-four { background-color: #241936; }

.gallery-art::before {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(56,232,255,.35);
  border-radius: 50%;
  top: 10%;
  left: 25%;
  box-shadow: 0 0 0 25px rgba(56,232,255,.025), 0 0 0 50px rgba(56,232,255,.025);
}

.gallery-caption {
  position: relative;
  z-index: 1;
  color: var(--cyan);
  font: 11px var(--font-heading);
  letter-spacing: 2px;
}

.gallery-cross {
  position: absolute;
  top: 25%;
  left: 45%;
  color: var(--cyan);
  font-size: 70px;
  font-weight: 200;
}

.videos-section {
  position: relative;
}

.youtube-layout {
  display: grid;
  grid-template-columns: 1.4fr .8fr;
  gap: 25px;
  align-items: stretch;
}

.youtube-player {
  min-width: 0;
  border: 1px solid var(--border);
  background: #0b111e;
  border-radius: 8px;
  overflow: hidden;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background:
    radial-gradient(ellipse at center, rgba(56,232,255,.12), transparent 60%),
    #070b14;
}

.video-frame iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.play-symbol {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--cyan);
  color: #07101a;
  margin-bottom: 18px;
  box-shadow: 0 0 35px rgba(56,232,255,.2);
}

.video-placeholder h3 {
  font: 700 17px var(--font-heading);
  margin-bottom: 8px;
}

.video-placeholder p {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 18px;
}

.video-placeholder .button {
  font-size: 15px;
  padding: 9px 15px;
}

.video-caption {
  padding: 13px 18px;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font: 10px var(--font-heading);
  letter-spacing: 1.5px;
}

.youtube-info {
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(145deg, #101b2d, #0a101c);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.youtube-icon {
  width: 55px;
  height: 40px;
  display: grid;
  place-items: center;
  color: white;
  background: #ff2545;
  border-radius: 10px;
  margin-bottom: 27px;
  font-size: 20px;
}

.youtube-info .eyebrow {
  margin-bottom: 12px;
}

.youtube-info h3 {
  font: 700 clamp(23px, 2.5vw, 34px)/1.35 var(--font-heading);
}

.youtube-info p {
  color: var(--muted);
  margin: 17px 0 24px;
}

.button-youtube {
  background: #ff2545;
  color: white;
  border: 1px solid #ff2545;
}

.button-youtube:hover {
  box-shadow: 0 0 25px rgba(255,37,69,.25);
}

.channel-handle {
  color: #8193aa;
  margin-top: 17px;
  font-size: 14px;
}

.video-note {
  display: flex;
  gap: 12px;
  margin-top: 18px;
  padding: 15px 18px;
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--muted);
  font-size: 15px;
}

.video-note > span { color: var(--cyan); }
.video-note code { color: var(--cyan); }

.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.tech-item {
  padding: 23px 10px;
  text-align: center;
  border: 1px solid var(--border);
  background: rgba(12,19,34,.65);
  border-radius: 5px;
  transition: border-color .2s, transform .2s;
}

.tech-item:hover {
  transform: translateY(-4px);
  border-color: rgba(56,232,255,.5);
}

.tech-item > span {
  display: block;
  color: var(--cyan);
  font-size: 30px;
  margin-bottom: 10px;
}

.tech-item strong {
  display: block;
  font: 600 13px var(--font-heading);
}

.tech-item small {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-size: 9px;
  letter-spacing: .8px;
}

.about-section {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  align-items: center;
  gap: 90px;
}

.about-visual {
  min-height: 350px;
  display: grid;
  place-items: center;
  position: relative;
}

.about-emblem {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(56,232,255,.55);
  background: radial-gradient(circle, rgba(56,232,255,.1), transparent 70%);
  border-radius: 50%;
  box-shadow
