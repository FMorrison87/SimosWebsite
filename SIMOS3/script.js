const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".simosLogo");
const hamburger = document.querySelector(".navbar-toggler");

function darkenNav() {
  if (window.scrollY <= 0) {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("shadow-sm");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.add("bg-light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("shadow-sm");
  }
}

function logoShowMobile() {
  if (window.scrollY <= 0) {
    logo.classList.remove("show");
    logo.classList.add("hide");
  } else {
    logo.classList.add("show");
    logo.classList.remove("hide");
  }
}

function mobileHamburgerClick() {
  navbar.classList.add("bg-light");
  navbar.classList.add("navbar-light");
  navbar.classList.remove("navbar-dark");
  logo.classList.remove("show");
  logo.classList.add("hide");
}

document.addEventListener("scroll", darkenNav);
document.addEventListener("scroll", logoShowMobile);
hamburger.addEventListener("click", mobileHamburgerClick);

document.addEventListener("DOMContentLoaded", darkenNav);
document.addEventListener("DOMContentLoaded", logoShowMobile);

const navItems = document.querySelectorAll(".navbar-nav li a");

function switchActive() {
  navItems.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}

navItems.forEach(item => item.addEventListener("click", switchActive));

const navbarItems = document.querySelector("#navbarNav ul");
const navbarButton = document.querySelector("#nav-contact-button");
const hero = document.querySelector(".hero");
