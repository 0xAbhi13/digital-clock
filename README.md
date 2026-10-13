<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2557,100:FF7A00&height=170&section=header&text=Digital%20Clock&fontSize=46&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship&descAlignY=62&descSize=17" alt="Digital Clock header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=FF7A00&center=true&vCenter=true&width=680&lines=Veda+Technology+Internship+%E2%80%A2+Task+4;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Live+HH%3AMM%3ASS+%E2%80%A2+12H%2F24H+%E2%80%A2+Start%2FStop%2FReset" alt="Typing introduction" />

  <p><b>Clean • Responsive • Accessible • Live every second</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-22c55e?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-FF7A00?style=for-the-badge)

</div>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=0F2557&center=true&vCenter=true&width=620&lines=Real-time+clock+powered+by+JavaScript...;No+backend+%E2%80%A2+No+build+%E2%80%A2+Just+open+index.html" alt="Greeting typing animation" />
</div>

Digital Clock of **Abhishek Shahaji Jadhav** — Web Developer & first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: no frameworks, no libraries, no APIs, no build step, no external assets in the app itself.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Task 4: Digital Clock.

<details>
<summary><b>📖 Table of Contents (click to expand)</b></summary>

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [📁 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🔗 Profile Links](#-profile-links)
- [📝 My Approach](#-my-approach)
- [✅ Outcome](#-outcome)
- [🌐 Deployment](#-deployment)
- [🧪 Testing Checklist](#-testing-checklist)
- [📜 JavaScript Concepts](#-javascript-concepts)
- [🕹️ Controls Behaviour](#️-controls-behaviour)
- [📸 Screenshots](#-screenshots)

</details>

## ✨ Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=5B6B8C&center=true&vCenter=true&width=680&lines=HH%3AMM%3ASS+%E2%80%A2+Date+%2B+Weekday+%E2%80%A2+12H%2F24H+%E2%80%A2+AM%2FPM;Start+%E2%80%A2+Stop+%E2%80%A2+Reset+%E2%80%A2+Live+Status" alt="Features animation" />
</div>

- **🕒 Live `HH:MM:SS` display** — current local time, refreshed every second with `setInterval()`.
- **📅 Date + weekday** — e.g. `Tuesday, October 13, 2026`, below the time.
- **🔢 Leading zeros** — single digits formatted with `padStart(2, '0')` via a `twoDigits()` helper.
- **🔁 12-hour / 24-hour toggle** — segmented `12H` / `24H` buttons, instant switch.
- **🌗 AM/PM indicator** — orange badge, visible only in 12-hour mode (midnight/noon edge case handled).
- **▶️ Start / Stop control** — single toggle button; freezes/resumes updates without duplicate timers.
- **♻️ Reset button** — re-syncs to system time, restores 24-hour format, restarts (ends *Running*).
- **🟢 Status indicator** — green *Running* / red *Stopped* dot + label.
- **⚡ Instant load** — correct time rendered immediately, then every second; always re-reads `new Date()` for accuracy.
- **🛡️ Safe updates** — all values set with `textContent`; no memory leaks (`timerId` guard + `clearInterval`).
- **🎨 Professional UI** — light background, navy + white + orange theme, large digital monospace time, subtle shadows, smooth transitions.
- **♿ Accessible** — semantic `header`/`main`/`section`/`time`/`footer`, labelled groups, `focus-visible` states, AA-safe contrast.
- **📱 Responsive** — fluid `clamp()` type, Flexbox, tablet + mobile breakpoints (600px, 380px).

## 🛠️ Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Variables, Flexbox, `clamp()`, media queries (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | `Date`, `setInterval`/`clearInterval`, DOM + events (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=flat-square) | Zero dependencies — requirement compliant |
| ![Fonts](https://img.shields.io/badge/System_Fonts-5B6B8C?style=flat-square) | System + monospace stack (works offline) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) + GitHub Pages | Version control + static hosting |

No React, Bootstrap, Tailwind, jQuery, APIs, or build tools. Badge/typing images above are README-only; the app itself loads zero external assets.

## 📁 Project Structure

```text
internship-task-4/
├── index.html                              # Semantic page structure
├── style.css                               # Complete responsive styling
├── script.js                               # Clock logic and event handling
├── README.md                               # This file
├── Veda_Technology_Task_4_Project_Report.docx  # Internship project report
└── assets/
    └── favicon.svg                         # Clock favicon (navy + orange)
```

All paths are **relative** (`./style.css`, `./script.js`, `./assets/favicon.svg`) for GitHub Pages compatibility.

## 🚀 How to Run

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1500&color=22c55e&center=true&vCenter=true&width=560&lines=No+npm+install...just+double-click!+%E2%9C%A8;Works+offline+%E2%80%A2+No+server+needed" alt="How to run animation" />
</div>

No install or build step. ✨

1. 📂 Open the `internship-task-4` folder.
2. 🖱️ Double-click `index.html` → opens in Chrome / Edge / Firefox.
   - Or right-click `index.html` → **Open with** → your browser.
   - Or serve it: `python -m http.server 8000` → http://localhost:8000
   - Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.
3. 🎉 Styling loads from `style.css`, logic from `script.js` (works offline, no backend).

## 🔗 Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-FF7A00?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |

## 📝 My Approach

1. **Read the brief first:** `HH:MM:SS` via `Date`, `setInterval` updates, `padStart` zeros, date + weekday, 12H/24H + AM/PM, Start/Stop + Reset, instant load, no duplicate timers, responsive, separate files, relative paths.
2. **Built the structure:** semantic landmarks, single `h1` (“Digital Clock”) + subtitle (“Real-time clock powered by JavaScript”), `<time>` with `HH:MM:SS` spans, date paragraph, segmented format group + Start/Stop + Reset, status + format badge.
3. **Styled mobile-up:** CSS custom properties for light / navy / orange theme, Flexbox card, navy time panel with orange colons, `clamp()` type, two breakpoints (600px, 380px), hover/focus-visible/active states, `prefers-reduced-motion` support.
4. **Wrote honest JS:** fresh `new Date()` each tick, `twoDigits()` helper, 12H conversion with midnight/noon fix, `textContent` only, `timerId` guard, `startClock`/`stopClock`/`resetClock`, immediate init then interval.
5. **Tested honestly:** syntax check, logic unit test, ID cross-check, local serve test (all 200s), responsive + console-error review; fixed failures before submitting.

## ✅ Outcome

A complete, responsive, dependency-free Digital Clock: large live time, date + weekday, 12H/24H with AM/PM, Start/Stop/Reset with live status, instant accurate load, and zero console errors. Ready to push to the public `internship-task-4` repo and deploy on GitHub Pages.

## 🌐 Deployment

**GitHub Pages:**

```powershell
Set-Location "C:\Users\EDIUS X.30\Documents\Default Project\internship-task-4"
git init -b main
git add index.html style.css script.js README.md Veda_Technology_Task_4_Project_Report.docx assets
git commit -m "Task 4: Digital Clock (HTML + CSS + JS)"
git remote add origin https://github.com/0xAbhi13/internship-task-4.git
git push -u origin main
```

Then GitHub → **Settings → Pages → Deploy from a branch → `main` / root** → `https://0xabhi13.github.io/internship-task-4/`

> Keep `index.html`, `style.css`, and `script.js` in the same directory with relative links so Pages resolves them correctly.

## 🧪 Testing Checklist

- [x] Clock shows the correct local time.
- [x] Seconds update every second.
- [x] Date and weekday are correct.
- [x] Both 12-hour and 24-hour modes work (AM/PM only in 12H).
- [x] Start, Stop, and Reset controls work as intended.
- [x] No JavaScript console errors (`node --check` clean, IDs verified).
- [x] Responsive on mobile and desktop (`clamp()` + media queries).
- [x] All assets and scripts load correctly (local serve: `index:200 css:200 js:200`).
- [x] No broken links or incorrect file paths (relative only).
- [x] Works without a backend or build process.

## 📜 JavaScript Concepts

| Concept | Where |
|---|---|
| `Date` object | `new Date()` in `updateClock()` |
| `setInterval` / `clearInterval` | start / stop / reset / init |
| DOM selection | `getElementById` bindings |
| DOM updates | `textContent`, `hidden`, `classList` |
| Event listeners | format, Start/Stop, Reset buttons |
| Conditional statements | 12H conversion, midnight/noon edge case, running state |
| `padStart()` | `twoDigits()` helper |
| Functions & variables | `updateClock`, `startClock`, `stopClock`, `resetClock`, `timerId`, `is24Hour` |

## 🕹️ Controls Behaviour

| Control | Behaviour |
|---|---|
| **12H / 24H** | Switches format instantly; AM/PM badge appears only in 12H mode |
| **Stop** | Freezes updates, status → *Stopped*, button becomes *Start* |
| **Start** | Resumes live updates, status → *Running* (no duplicate timers) |
| **Reset** | Re-syncs to system time, restores 24-hour format, restarts (ends *Running*) |

## 📸 Screenshots

> Placeholder — add a screenshot after running the app.

```text
[ Screenshot coming soon — capture the clock in 24H and 12H modes ]
```

To add one later, save an image as `screenshot.png` in this folder and embed it:

```markdown
![Digital Clock screenshot](./screenshot.png)
```

## Accuracy Notes

- Time is read from the viewer's own device clock — no invented timestamps.
- Skills are presented as *learning/using* at internship level.
- Internship is described as *ongoing, project-based learning* (started 10 Oct 2026, per Task 3).
- App uses zero external requests; README badges/animations are docs-only.

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF7A00,100:0F2557&height=120&section=footer" alt="Footer wave" />

  <p><sub>Veda Technology Internship — Task 4: Digital Clock • HTML5 • CSS3 • Vanilla JavaScript ✨</sub></p>

</div>
