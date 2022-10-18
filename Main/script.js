const backButton = document.querySelector("#backToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a");
const bigBall = document.querySelector(".cursor_ball--big");
const smallBall = document.querySelector(".cursor_ball--small");
const hoverables = document.querySelectorAll(".hoverable");
const header = document.querySelector("header");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add("bg");
    backButton.style.display = "block";
  } else {
    header.classList.remove("bg");
    backButton.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

for (const link of links) {
  link.addEventListener("click", mobMenu);
}

backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(event) {
  gsap.to(bigBall, { duration: 0.4, x: event.x - 15, y: event.y - 11 });
  gsap.to(smallBall, { duration: 0.1, x: event.x - 5, y: event.y - 7 });
}

// Hover an element
function onMouseHover() {
  gsap.to(bigBall, { duration: 0.3, scale: 4 });
}
function onMouseHoverOut() {
  gsap.to(bigBall, { duration: 0.3, scale: 1 });
}
