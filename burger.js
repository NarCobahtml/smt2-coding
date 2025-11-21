// Burger
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMenu() {
  const nav = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  nav.classList.remove("active");
  hamburger.classList.remove("active");
}

// Nutup
document.addEventListener("click", function (event) {
  const nav = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (
    !isClickInsideNav &&
    !isClickOnHamburger &&
    nav.classList.contains("active")
  ) {
    closeMenu();
  }
});

function setActivePage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
      link.classList.add("active");
    }

    if (currentPage === "" && linkHref === "index.html") {
      link.classList.add("active");
    }
  });

  updateUnderline();
}

// Garis navbar
function updateUnderline() {
  const activeLink = document.querySelector("nav ul li a.active");
  const navUl = document.querySelector("nav ul");

  if (!activeLink || !navUl) return;

  const linkRect = activeLink.getBoundingClientRect();
  const navRect = navUl.getBoundingClientRect();

  const left = linkRect.left - navRect.left;
  const width = linkRect.width;

  navUl.style.setProperty("--underline-left", `${left}px`);
  navUl.style.setProperty("--underline-width", `${width}px`);
}

// Ganti garis di halaman lain
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll("nav ul li a")
      .forEach((a) => a.classList.remove("active"));

    this.classList.add("active");
    updateUnderline();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setActivePage();

  window.addEventListener("resize", updateUnderline);
});

window.addEventListener("popstate", setActivePage);
