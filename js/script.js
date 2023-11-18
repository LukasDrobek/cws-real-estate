"use strict";

// Mobile Navbar Toggle
// =============================

const $navbar = document.querySelector("[data-navbar]");
const $navToggle = document.querySelector("[data-nav-toggle]");

$navToggle.addEventListener("click", () => {
  $navbar.classList.toggle("active");
});

// Header Scroll State
// =============================

const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    $header.classList.add("active");
  } else {
    $header.classList.remove("active");
  }
});
