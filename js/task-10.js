"use strict";

const boxesEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");

function createBoxes(amount) {
  let widthAmount = 30;
  let heightAmount = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${widthAmount}px; height: ${heightAmount}px; background-color: ${getRandomHexColor()};"></div>`
    );
    widthAmount += 10;
    heightAmount += 10;
  }
}

function handleCreateBoxes() {
  createBoxes(inputEl.value);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener("click", handleCreateBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
