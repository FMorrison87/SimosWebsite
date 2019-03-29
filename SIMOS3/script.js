const navbar = document.querySelector(".navbar");

function darkenNav() {
  if (window.scrollY == 0) {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.add("bg-light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
  }
}

// document.addEventListener("scroll", darkenNav);

const navItems = document.querySelectorAll(".navbar-nav li a");

function switchActive() {
  navItems.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}

navItems.forEach(item => item.addEventListener("click", switchActive));

const logoShow = document.querySelector(".simosLogo");
const navbarItems = document.querySelector("#navbarNav ul");
const navbarButton = document.querySelector("#nav-contact-button");
const logoHeader = document.querySelector(".logo-header").offsetHeight;
const hero = document.querySelector(".hero");

function navbarChanges() {
  if (window.scrollY <= logoHeader) {
    logoShow.setAttribute("style", "display: none;");
    navbarButton.setAttribute("style", "display: none;");
    navbarItems.classList.remove("ml-auto");
    navbarItems.classList.add("mx-auto");
    navbar.classList.add("sticky-top");
    navbar.classList.remove("fixed-top");
    hero.classList.remove("sticky-offset");
  } else {
    logoShow.setAttribute("style", "display: block;");
    navbarButton.setAttribute("style", "display: block;");
    navbarItems.classList.add("ml-auto");
    navbarItems.classList.remove("mx-auto");
    navbar.classList.remove("sticky-top");
    navbar.classList.add("fixed-top");
    hero.classList.add("sticky-offset");
  }
}

// document.addEventListener("scroll", navbarChanges);
