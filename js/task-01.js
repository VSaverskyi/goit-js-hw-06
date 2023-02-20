"use strict";
const categoriesEls = document.querySelector("#categories");
const categoryEl = categoriesEls.querySelectorAll(".item");

const countNumberEls = (items) => `Number of categories: ${items.length}`;
console.log(countNumberEls(categoryEl));

const showTitleText = (els) => {
  els.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
};

showTitleText(categoryEl);
