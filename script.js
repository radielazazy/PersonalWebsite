function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// box

// script.js
const closeButton = document.getElementById("closeBoxButton");
const closeButton2 = document.getElementById("closeBoxButton2");
const closeButton3 = document.getElementById("closeBoxButton3");
const showButton = document.getElementById("showBox");
const showButton2 = document.getElementById("showBox2");
const showButton3 = document.getElementById("showBox3");
const scrollableBox = document.getElementById("scrollableBox");
const scrollableBox2 = document.getElementById("scrollableBox2");
const scrollableBox3 = document.getElementById("scrollableBox3");
const boxContent = document.querySelector(".box-content");
const boxContent2 = document.querySelector(".box-content2");
const boxContent3 = document.querySelector(".box-content3");

let isScrolling = false;
let isScrolling2 = false;
let isScrolling3 = false;

closeButton.addEventListener("click", function () {
  scrollableBox.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling to the main page
});

closeButton2.addEventListener("click", function () {
  scrollableBox2.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling to the main page
});

closeButton3.addEventListener("click", function () {
  scrollableBox3.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling to the main page
});

showButton.addEventListener("click", function () {
  scrollableBox.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling on the main page
});

showButton2.addEventListener("click", function () {
  scrollableBox2.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling on the main page
});

showButton3.addEventListener("click", function () {
  scrollableBox3.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling on the main page
});

boxContent.addEventListener("mouseenter", function () {
  isScrolling = true;
});

boxContent.addEventListener("mouseleave", function () {
  isScrolling = false;
});

boxContent2.addEventListener("mouseenter", function () {
  isScrolling2 = true;
});

boxContent2.addEventListener("mouseleave", function () {
  isScrolling2 = false;
});

boxContent3.addEventListener("mouseenter", function () {
  isScrolling3 = true;
});

boxContent3.addEventListener("mouseleave", function () {
  isScrolling3 = false;
});

scrollableBox.addEventListener("wheel", function (e) {
  if (isScrolling) {
    boxContent.scrollTop += e.deltaY;
    e.preventDefault();
  }
});

scrollableBox2.addEventListener("wheel", function (e) {
  if (isScrolling2) {
    boxContent2.scrollTop += e.deltaY;
    e.preventDefault();
  }
});

scrollableBox3.addEventListener("wheel", function (e) {
  if (isScrolling3) {
    boxContent3.scrollTop += e.deltaY;
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nightModeToggle = document.getElementById("nightModeToggle");

  if (nightModeToggle) {
      nightModeToggle.addEventListener("click", function () {
          toggleNightMode();
      });
  }

  function toggleNightMode() {
      const body = document.body;
      body.classList.toggle("night-mode");
  }
});




