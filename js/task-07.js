"use strict";

const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("change", changeFontSize);

function changeFontSize(event) {
  let fontSizeValue = Number(event.currentTarget.value);
  textEl.style.fontSize = `${fontSizeValue}px`;
}
