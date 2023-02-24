"use strict";

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handleMakeMessage);

function handleMakeMessage(event) {
  if (event.currentTarget.value !== "") {
    outputEl.textContent = event.currentTarget.value.trim();
    return;
  }
  outputEl.textContent = "Anonymous";
}
