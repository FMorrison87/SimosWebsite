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
