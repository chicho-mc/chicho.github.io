/* ============================================================
   SUPERFUNK — the groove engine
   ============================================================ */
(() => {
  "use strict";

  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- current year in footer ----------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* --- custom disco-ball cursor --------------------------- */
  const cursor = document.querySelector(".cursor");
  if (cursor && !reduceMotion) {
    let spin = 0;
    window.addEventListener("pointermove", (e) => {
      spin += 6;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%) rotate(${spin}deg)`;
    });
    // grow over interactive things
    document.querySelectorAll("a, button, .card, input").forEach((el) => {
      el.addEventListener("pointerenter", () => (cursor.style.fontSize = "40px"));
      el.addEventListener("pointerleave", () => (cursor.style.fontSize = "26px"));
    });
  }

  /* --- the FUNK dial -------------------------------------- */
  const slider = document.getElementById("funk");
  const readout = document.getElementById("readout");

  function applyFunk(value) {
    const f = value / 100;                 // 0..1
    root.style.setProperty("--funk", f.toFixed(2));
    // faster background + marquee as funk rises (4s .. 22s)
    const speed = (22 - f * 18).toFixed(1);
    root.style.setProperty("--speed", `${speed}s`);
    readout.textContent = `${value}%`;

    // recolor the readout across the spectrum
    const hue = Math.round(f * 320);
    readout.style.color = `hsl(${hue} 100% 60%)`;
    readout.style.textShadow = `0 0 ${10 + f * 30}px hsl(${hue} 100% 60%)`;

    if (value >= 100) maximumFunk();
  }

  slider.addEventListener("input", (e) => applyFunk(+e.target.value));
  applyFunk(+slider.value);

  /* --- MAXIMUM FUNK easter egg ---------------------------- */
  let maxxed = false;
  function maximumFunk() {
    if (maxxed || reduceMotion) return;
    maxxed = true;
    document.body.animate(
      [{ filter: "hue-rotate(0deg)" }, { filter: "hue-rotate(360deg)" }],
      { duration: 1400, iterations: 2 }
    );
    burst(window.innerWidth / 2, window.innerHeight / 2, 40);
    setTimeout(() => (maxxed = false), 2800);
  }

  /* --- emoji burst on click ------------------------------- */
  const EMOJI = ["🪩", "🎷", "🕺", "💃", "⭐", "🌈", "✨", "🎺", "🎸", "💜", "💚", "💗"];

  function burst(x, y, count = 16) {
    if (reduceMotion) return;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.textContent = EMOJI[(Math.random() * EMOJI.length) | 0];
      p.style.left = x + "px";
      p.style.top = y + "px";
      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 160;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 60; // bias upward

      p.animate(
        [
          { transform: "translate(-50%,-50%) scale(0) rotate(0deg)", opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.4) rotate(${(Math.random() * 720 - 360) | 0}deg)`, opacity: 1, offset: 0.7 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 120}px)) scale(0.5) rotate(360deg)`, opacity: 0 },
        ],
        { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.3,1)" }
      ).onfinish = () => p.remove();
    }
  }

  window.addEventListener("pointerdown", (e) => {
    // ignore drags on the slider so it stays usable
    if (e.target.id === "funk") return;
    burst(e.clientX, e.clientY);
  });

  /* --- jiggle individual words of the statement ----------- */
  const jiggle = document.querySelector("[data-jiggle]");
  if (jiggle && !reduceMotion) {
    jiggle.querySelectorAll("span").forEach((s, i) => {
      s.style.display = "inline-block";
      s.addEventListener("pointerenter", () => {
        s.animate(
          [
            { transform: "rotate(0) scale(1)" },
            { transform: `rotate(${i % 2 ? 6 : -6}deg) scale(1.15)` },
            { transform: "rotate(0) scale(1)" },
          ],
          { duration: 400, easing: "ease-in-out" }
        );
      });
    });
  }

  /* --- konami-lite: type "chicho" for instant max --------- */
  let typed = "";
  window.addEventListener("keydown", (e) => {
    typed = (typed + e.key.toLowerCase()).slice(-6);
    if (typed === "chicho") {
      slider.value = 100;
      applyFunk(100);
    }
  });

  console.log("%c🪩 chicho loaded — type 'chicho' or crank the dial to 100.", "font-size:14px;color:#c6ff1a;background:#14040f;padding:6px 10px;border-radius:6px;");
})();
