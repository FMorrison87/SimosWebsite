const navbar = document.querySelector(".navbar");

function darkenNav() {
  if (window.scrollY <= 0) {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("shadow-sm");
  } else {
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-light");
    navbar.classList.add("shadow-sm");
  }
}

document.addEventListener("scroll", darkenNav);
document.addEventListener("DOMContentLoaded", darkenNav);

const navItems = document.querySelectorAll(".navbar-nav li a");

function switchActive() {
  navItems.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}

navItems.forEach(item => item.addEventListener("click", switchActive));

const logoShow = document.querySelector(".simosLogo");
const navbarItems = document.querySelector("#navbarNav ul");
const navbarButton = document.querySelector("#nav-contact-button");
const hero = document.querySelector(".hero");
