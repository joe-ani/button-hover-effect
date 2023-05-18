const button = document.querySelector(".button7");
const glow = document.querySelector(".glow-hover");

let val = true;
const buttonRect = button.getBoundingClientRect();
const glowRect = button.getBoundingClientRect();
button.addEventListener("mousemove", (e) => {
  //   console.log("hover", e.offsetY, e.offsetX);
  if (e.offsetX > 2 && e.offsetX < 65) {
    console.log("X", e.offsetX, "Y", e.offsetY);
    glow.setAttribute("isHover", true);
  } else {
    glow.setAttribute("isHover", false);
  }
});

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
