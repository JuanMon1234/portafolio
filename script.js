/* ===== HEADER SCROLL ===== */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

/* ===== MOBILE MENU ===== */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

/* ===== REVEAL ON SCROLL ===== */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("active"), i * 80);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

/* ===== SKILL BARS ===== */
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      skillObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".skill-row").forEach(row => skillObs.observe(row));

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});

/* ===== CONTACT FORM ===== */
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const original = btn.innerHTML;
    btn.innerHTML = "Mensaje enviado ✓";
    btn.style.background = "#166534";
    btn.style.borderColor = "#166534";
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = "";
      btn.style.borderColor = "";
      form.reset();
    }, 3500);
  });
}