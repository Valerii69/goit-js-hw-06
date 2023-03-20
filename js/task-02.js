const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const itemsEl = [];
// Варіант 1
ingredients.map((ingredient) => {
  const itemNewEl = document.createElement("li");
  itemNewEl.textContent = ingredient;
  itemNewEl.classList.add("item");
  itemsEl.push(itemNewEl);
});

listEl.append(...itemsEl);

