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
