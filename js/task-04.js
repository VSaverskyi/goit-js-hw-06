"use strict";

let counterValue = 0;

const counterEl = document.querySelector("#counter");
const decrementBtnEl = counterEl.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = counterEl.querySelector(
  'button[data-action="increment"]'
);
const spanEl = counterEl.querySelector("#value");

decrementBtnEl.addEventListener("click", decrementValue);
incrementBtnEl.addEventListener("click", incrementValue);

function decrementValue() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
