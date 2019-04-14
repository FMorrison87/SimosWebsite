$(document).ready(function() {
  $(".first-button").on("click", function() {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function() {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function() {
    $(".animated-icon3").toggleClass("open");
  });
  $(".scrollSpy").scrollspy({ target: "#navbar-spy" });
});

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".simosLogo");
const hamburger = document.querySelector(".animated-icon2");
const hamburgerMenu = document.querySelector(".navbar-collapse");
const phoneMobile = document.querySelector(".phone-mobile");
const hamburgerColor = document.querySelectorAll(".animated-icon2 span");
const navItems = document.querySelectorAll(".navbar-nav li a");
const navbarItems = document.querySelector("#navbarNav ul");
const navbarButton = document.querySelector("#nav-contact-button");
const hero = document.querySelector(".hero");
const hamburgerButton = document.querySelector(".animated-icon2");

function switchActive() {
  navItems.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}

function darkenNav() {
  if (window.scrollY <= 0) {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("shadow-sm");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("navbar-dark");
    hamburgerColor.forEach(color => (color.style.backgroundColor = "#e3f2fd"));
  } else {
    navbar.classList.add("bg-light");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    navbar.classList.add("shadow-sm");
    hamburgerColor.forEach(color => (color.style.backgroundColor = "#343a40"));
  }
}

function logoShowMobile() {
  if (window.scrollY <= 0) {
    logo.classList.remove("show");
    logo.classList.add("hide");
    // phoneMobile.classList.remove("show");
    // phoneMobile.classList.add("hide");
  } else {
    logo.classList.add("show");
    logo.classList.remove("hide");
    // phoneMobile.classList.add("show");
    // phoneMobile.classList.remove("hide");
  }
}

function mobileHamburgerClick() {
  navbar.classList.add("bg-light");
  navbar.classList.add("navbar-light");
  navbar.classList.remove("navbar-dark");
  logo.classList.add("show");
  logo.classList.remove("hide");
  phoneMobile.classList.add("hide");
}

function menuCloseOnScroll() {
  if (hamburgerButton.classList.contains("open")) {
    hamburgerButton.classList.remove("open");
    hamburger.classList.add("collapsed");
    hamburgerMenu.classList.remove("show");
  }
}

function setHamburgerColor() {
  hamburgerColor.forEach(color => (color.style.backgroundColor = "#343a40"));
}

// Making a custom scrollspy

const heroSection = document.querySelector(".hero");
const threeItems = document.querySelector("#threeItems");
const aboutSection = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const testimonialsSection = document.querySelector("#testimonials");
const hoursSection = document.querySelector("#hours");
const aboutNavlink = navItems.item(0);
const servicesNavlink = navItems.item(1);
const testimonialsNavlink = navItems.item(2);
const hoursNavlink = navItems.item(3);

function customScrollSpy() {
  let setAboutCoords = aboutSection.getBoundingClientRect();
  let setServicesCoords = servicesSection.getBoundingClientRect();
  let setTestimonialsCoords = testimonialsSection.getBoundingClientRect();
  let setHoursCoords = hoursSection.getBoundingClientRect();

  if (
    setAboutCoords.top - 20 <= 0 &&
    setAboutCoords.top >= aboutSection.offsetHeight * -1 + 20
  ) {
    navItems.forEach(item => item.classList.remove("active"));
    aboutNavlink.classList.add("active");
  } else if (
    setServicesCoords.top - 20 <= 0 &&
    setServicesCoords.top >= servicesSection.offsetHeight * -1
  ) {
    navItems.forEach(item => item.classList.remove("active"));
    servicesNavlink.classList.add("active");
  } else if (
    setTestimonialsCoords.top - 20 <= 0 &&
    setTestimonialsCoords.top >= testimonialsSection.offsetHeight * -1 + 20
  ) {
    navItems.forEach(item => item.classList.remove("active"));
    testimonialsNavlink.classList.add("active");
  } else if (
    setHoursCoords.top - 20 <= 0 &&
    setHoursCoords.top >= hoursSection.offsetHeight * -1
  ) {
    navItems.forEach(item => item.classList.remove("active"));
    hoursNavlink.classList.add("active");
  } else {
    navItems.forEach(item => item.classList.remove("active"));
  }
}

document.addEventListener("DOMContentLoaded", darkenNav);
document.addEventListener("DOMContentLoaded", logoShowMobile);

document.addEventListener("scroll", darkenNav);
document.addEventListener("scroll", logoShowMobile);
document.addEventListener("scroll", menuCloseOnScroll);
hamburger.addEventListener("click", mobileHamburgerClick);
hamburger.addEventListener("click", setHamburgerColor);

document.addEventListener("scroll", customScrollSpy);

navItems.forEach(item => item.addEventListener("click", switchActive));
