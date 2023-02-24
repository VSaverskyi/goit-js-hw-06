"use strict";

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", handleCheckValidation);
const VALUE_LENGTH = inputEl.dataset.length;

function handleCheckValidation(event) {
  const eventEl = event.currentTarget;
  const message = eventEl.value.trim();

  if (message === "") {
    eventEl.classList.remove("valid");
    eventEl.classList.remove("invalid");
    return;
  } else if (Number(message.length) === Number(VALUE_LENGTH)) {
    eventEl.classList.add("valid");
    eventEl.classList.remove("invalid");
    return;
  } else {
    eventEl.classList.add("invalid");
    eventEl.classList.remove("valid");
  }
  console.log(eventEl);
}
