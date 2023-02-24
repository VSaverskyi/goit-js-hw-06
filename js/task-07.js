"use strict";

const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("change", handleChangeFontSize);

function handleChangeFontSize(event) {
  let fontSizeValue = Number(event.currentTarget.value);
  textEl.style.fontSize = `${fontSizeValue}px`;
}
