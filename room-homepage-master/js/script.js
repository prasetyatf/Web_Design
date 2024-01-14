// manipulate classlist untuk tombol hamburgermenu dan close button
const hamburgerMenu = document.getElementById("hamburger-menu");
const subMenu = document.querySelector("ul.sub-menu");
const closeButton = document.getElementById("close");

hamburgerMenu.addEventListener("click", function () {
  subMenu.classList.add("active");
});

closeButton.addEventListener("click", function () {
  subMenu.classList.remove("active");
});

// buat slider yang mengubah background img
const header = document.querySelector("header");
const backButton = document.querySelector(".navigate a#back-button");
const nextButton = document.querySelector(".navigate a#next-button");

const bgImgArray = [
  "url('/images/desktop-image-hero-1.jpg')",
  "url('/images/desktop-image-hero-2.jpg')",
  "url('/images/desktop-image-hero-3.jpg')",
];

let currentIndex = 0;
const maxIndex = bgImgArray.length - 1;
const minIndex = bgImgArray.length - bgImgArray.length;

backButton.addEventListener("click", function () {
  currentIndex--;
  if(currentIndex < minIndex){
    currentIndex = maxIndex;
    header.style.backgroundImage = bgImgArray[currentIndex];
    console.log(header.style.backgroundImage = bgImgArray[currentIndex]);
  }
  else{
    header.style.backgroundImage = bgImgArray[currentIndex];
    console.log(header.style.backgroundImage = bgImgArray[currentIndex]);
  }

});

nextButton.addEventListener("click", function () {
  currentIndex++;
  if(currentIndex > maxIndex){
    currentIndex = minIndex;
    header.style.backgroundImage = bgImgArray[currentIndex];
    console.log(header.style.backgroundImage = bgImgArray[currentIndex]);
  }
  else{
    header.style.backgroundImage = bgImgArray[currentIndex];
    console.log(header.style.backgroundImage = bgImgArray[currentIndex]);
  }

});