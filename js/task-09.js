"use strict";

const bodyEl = document.querySelector("body");
const dataColorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

const handleChangeColor = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  dataColorEl.textContent = getRandomHexColor();
};
changeColorBtnEl.addEventListener("click", handleChangeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
