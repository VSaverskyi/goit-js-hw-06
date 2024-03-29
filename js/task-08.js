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
// console.log(formEl.elements);

// const refs = {
//   form: document.querySelector(".login-form"),
// };
// refs.form.addEventListener("submit", onFormSubmit);
// function onFormSubmit(e) {
//   e.preventDefault();
//   // console.dir(e.currentTarget.elements.email.value);
//   const formData = new FormData(e.currentTarget);
//   formData.forEach((value, name) => {
//     if (value.length === 0) {
//       return window.alert("Помилка! Всі поля повинні бути заповнені.");
//     }

//     formData[name] = value;
//     // console.log("Поле:", name);
//     // console.log("Значення:", value);
//   });
//   console.log(formData);
// }
