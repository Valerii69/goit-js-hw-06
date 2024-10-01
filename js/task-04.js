// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  valueEl.textContent = counterValue;
  console.log(counterValue);
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;

  valueEl.textContent = counterValue;
  console.log(counterValue);
});

function traverseTree(node) {
  if (node === null) return;
  console.log(node.value);
  traverseTree(node.left); // Рекурсія для лівого піддерева
  traverseTree(node.right); // Рекурсія для правого піддерева
}