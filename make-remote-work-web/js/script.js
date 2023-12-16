const dropdown = document.querySelectorAll(".dropdown");
const dropdownIcon = document.querySelectorAll(".dropdownIcon");
const featuresDropdownMenu = document.querySelector(".features");
const companyDropdownMenu = document.querySelector(".company");
const closeButton = document.querySelector(".close");
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileViewMenu = document.querySelector("header nav");

// menambahkan class elemen div id shadow yg ada di bawah nav menu yg sudah ada di css
const mobileMenuShadow = document.getElementById("shadow");

// toggle features's dropdown menu
// memunculkan features menu sekaligus mengubah dropdown icon
dropdown[0].addEventListener("click", function () {
  featuresDropdownMenu.classList.toggle("active");
  if (featuresDropdownMenu.className == "features active") {
    dropdownIcon[0].src = "/images/icon-arrow-up.svg";
  } else {
    dropdownIcon[0].src = "/images/icon-arrow-down.svg";
  }
});

// toggle company's dropdown menu
// memunculkan features menu sekaligus mengubah dropdown icon
dropdown[1].addEventListener("click", function () {
  companyDropdownMenu.classList.toggle("active");
  if (companyDropdownMenu.className == "company active") {
    dropdownIcon[1].src = "/images/icon-arrow-up.svg";
  } else {
    dropdownIcon[1].src = "/images/icon-arrow-down.svg";
  }
});

// hamburger menu is calling the menu & the shadow
hamburgerMenu.addEventListener("click", function () {
  mobileViewMenu.style.left = "40%";
  mobileMenuShadow.classList.add("shadow");
});

// close button is removing the menu & the shadow
closeButton.addEventListener("click", function () {
  mobileViewMenu.style.left = "140%";
  mobileMenuShadow.classList.remove("shadow");
});
