// ===== Elements =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");
const navItems = document.querySelectorAll(".nav-links a");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// ===== Mobile Menu Toggle =====
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== Smooth Scroll with Offset (FIX) =====
navItems.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    const navHeight = navbar.offsetHeight;
    const sectionTop =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });

    // Close mobile menu
    navLinks.classList.remove("active");
  });
});

// ===== Scroll Events =====
window.addEventListener("scroll", () => {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll-to-top button
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Active nav link
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 20;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Scroll to Top =====
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
