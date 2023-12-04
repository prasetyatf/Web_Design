// memunculkan & menyembunyikan menu dg menambahkan event di hamburger menu
// buat fitur ketika diklik di luar menu maka menu hilang

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

function toggleMenu(event) {
  if (
    !hamburgerMenu.contains(event.target) &&
    !navMenu.contains(event.target)
  ) {
    navMenu.classList.remove("active");
  }
}

// ketika klik hamburgerMenu, maka munculkan/hilangkan menu
hamburgerMenu.addEventListener("click", () =>
  navMenu.classList.toggle("active")
);

// jika menu muncul, lalu user klik di luar hamburgerMenu dan navMenu, maka navMenu keluar
document.addEventListener("click", toggleMenu);
