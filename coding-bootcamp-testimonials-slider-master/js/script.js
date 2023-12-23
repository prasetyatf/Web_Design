const prevButton = document.querySelector(".button a");
const nextButton = document.querySelector(".button a:nth-child(2)");
const txt1 = document.querySelector(".txt-1");
const txt2 = document.querySelector(".txt-2");

prevButton.addEventListener("click", function () {
  if (!txt1.classList.contains("active")) {
    txt1.classList.add("active");
    txt2.classList.remove("active");
  }
});

nextButton.addEventListener("click", function () {
  if (!txt2.classList.contains("active")) {
    txt2.classList.add("active");
    txt1.classList.remove("active");
  }
});
