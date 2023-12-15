const dropdown = document.querySelectorAll("li.dropdown");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const closeButton = document.querySelector(".close");
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileViewMenu = document.querySelector("header nav");

// toggle featureses dropdown menu
dropdown[0].addEventListener("click", function () {
  features.classList.toggle("active");
});

// toggle company's dropdown menu
dropdown[1].addEventListener("click", function () {
  company.classList.toggle("active");
});

// hamburger menu is calling the menu
hamburgerMenu.addEventListener("click", function () {
  mobileViewMenu.style.left = "40%";
});

// close button is removing menu
closeButton.addEventListener("click", function () {
  mobileViewMenu.style.left = "140%";
});
