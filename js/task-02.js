const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const makeIngredient = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
});
const addIngredients = (array) => {
  ingredientsEl.append(...array);
  return console.log(ingredientsEl);
};
addIngredients(makeIngredient);
