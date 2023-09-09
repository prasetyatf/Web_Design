const navMenu = document.querySelector(".nav-menu");
const hamburgerMenu = document.querySelector("#hamburger-menu");

console.log(hamburgerMenu);

hamburgerMenu.onclick = () => {
  navMenu.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
