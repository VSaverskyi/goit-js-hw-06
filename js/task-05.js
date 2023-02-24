"use strict";

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", makeMessage);

function makeMessage(event) {
  if (event.currentTarget.value !== "") {
    outputEl.textContent = event.currentTarget.value;
    return;
  }
  outputEl.textContent = "Anonymous";
}
