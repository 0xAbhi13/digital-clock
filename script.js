/* ============================================================
 * Digital Clock — Veda Technology Internship Task 4
 * Concepts: Date, setInterval/clearInterval, DOM selection,
 * event listeners, conditionals, padStart, functions/variables
 * ============================================================ */

// ---------- DOM selection ----------
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var ampmEl = document.getElementById("ampm");
var clockTimeEl = document.getElementById("clockTime");
var dateEl = document.getElementById("dateDisplay");
var statusDotEl = document.getElementById("statusDot");
var statusTextEl = document.getElementById("statusText");
var formatBadgeEl = document.getElementById("formatBadge");
var format12Btn = document.getElementById("format12Btn");
var format24Btn = document.getElementById("format24Btn");
var startStopBtn = document.getElementById("startStopBtn");
var resetBtn = document.getElementById("resetBtn");

// ---------- State variables ----------
var timerId = null; // null = stopped, number = running (prevents duplicates)
var is24Hour = true; // default format
var isRunning = true;

/**
 * Format a number with leading zeros.
 * Demonstrates String formatting with padStart().
 */
function twoDigits(value) {
  return String(value).padStart(2, "0");
}

/**
 * Render current time + date from the system clock.
 * Always reads fresh `new Date()` so the clock stays accurate
 * (no manual counter increment).
 */
function updateClock() {
  var now = new Date(); // user's local time

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampmText = "";

  // Conditional: convert to 12-hour format when selected
  if (!is24Hour) {
    ampmText = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) {
      hours = 12; // midnight / noon edge case
    }
  }

  var hh = twoDigits(hours);
  var mm = twoDigits(minutes);
  var ss = twoDigits(seconds);

  // DOM updates with textContent (safe, no HTML parsing)
  hoursEl.textContent = hh;
  minutesEl.textContent = mm;
  secondsEl.textContent = ss;

  // Machine-readable value for <time>
  clockTimeEl.setAttribute("datetime", hh + ":" + mm + ":" + ss);

  // AM/PM indicator only in 12-hour mode
  if (!is24Hour) {
    ampmEl.hidden = false;
    ampmEl.textContent = ampmText;
  } else {
    ampmEl.hidden = true;
    ampmEl.textContent = "";
  }

  // Date + weekday, e.g. "Tuesday, October 13, 2026"
  var dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  dateEl.textContent = now.toLocaleDateString(undefined, dateOptions);
}

/**
 * Update status indicator + Start/Stop button label.
 */
function renderStatus() {
  if (isRunning) {
    statusDotEl.classList.remove("stopped");
    statusDotEl.classList.add("running");
    statusTextEl.textContent = "Running";
    startStopBtn.textContent = "Stop";
  } else {
    statusDotEl.classList.remove("running");
    statusDotEl.classList.add("stopped");
    statusTextEl.textContent = "Stopped";
    startStopBtn.textContent = "Start";
  }
}

/**
 * Update the 12H/24H toggle UI + badge.
 */
function renderFormat() {
  var is12 = !is24Hour;
  format12Btn.classList.toggle("active", is12);
  format24Btn.classList.toggle("active", is24Hour);
  format12Btn.setAttribute("aria-pressed", String(is12));
  format24Btn.setAttribute("aria-pressed", String(is24Hour));
  formatBadgeEl.textContent = is24Hour ? "24-Hour" : "12-Hour";
}

/**
 * Start the clock. Guards against duplicate timers.
 */
function startClock() {
  if (timerId !== null) {
    return; // already running — prevent memory leak / double speed
  }
  isRunning = true;
  updateClock(); // refresh immediately
  timerId = setInterval(updateClock, 1000);
  renderStatus();
}

/**
 * Stop the clock and clear the timer.
 */
function stopClock() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  isRunning = false;
  renderStatus();
}

/**
 * Reset: re-sync to live system time, restore 24-hour format,
 * and restart the clock (ends in Running state).
 */
function resetClock() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  is24Hour = true;
  isRunning = true;
  renderFormat();
  updateClock();
  timerId = setInterval(updateClock, 1000);
  renderStatus();
}

// ---------- Event listeners ----------
format12Btn.addEventListener("click", function () {
  is24Hour = false;
  renderFormat();
  updateClock(); // reflect format change instantly
});

format24Btn.addEventListener("click", function () {
  is24Hour = true;
  renderFormat();
  updateClock();
});

startStopBtn.addEventListener("click", function () {
  if (isRunning) {
    stopClock();
  } else {
    startClock();
  }
});

resetBtn.addEventListener("click", resetClock);

// ---------- Initialize immediately, then tick every second ----------
// Shows correct time on page load (no 1-second blank wait).
renderFormat();
updateClock();
renderStatus();
timerId = setInterval(updateClock, 1000);
