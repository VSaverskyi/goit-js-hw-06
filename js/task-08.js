"use strict";

const formEl = document.querySelector(".login-form");

const handleCheckVerifyFormData = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const dataObj = {};
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  dataObj.email = email.value;
  dataObj.password = password.value;
  console.log(dataObj);
  formEl.reset();
};

formEl.addEventListener("submit", handleCheckVerifyFormData);
