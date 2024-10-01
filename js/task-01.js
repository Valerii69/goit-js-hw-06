// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const list = document.querySelector("ul#categories");

// const listItem = list.querySelectorAll("li.item");

// console.log("Number of categories: " + listItem.length);

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {
//   console.log("Category: " + item.querySelector("h2").textContent);
//   const itemsElements = item.querySelector("ul");
//   console.log("Elements: " + itemsElements.querySelectorAll("li").length);
// });

// let fields = [
//   { id: 17 },
//   { id: -6 },
//   { id: null },
//   {},
//   { id: 0 },
//   { id: 8 },
//   { id: 13.4 },
//   { id: "err" },
//   { id: "undefined" },
// ];
// let uncorrectEntries = 0;
// function filterID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true;
//   }
//   uncorrectEntries++;
//   return false;
// }
// let fieldsByID = fields.filter(filterID);
// console.log("Корректная структура полей\n", fieldsByID);

// console.log("\nЧисло ошибочных элементов = ", uncorrectEntries);

// const data = [7, 14, 5, 12, 25];

// const value1 = data.some((item) => item > 10);
// const value2 = data.some((item) => item < 3);
// console.log(" = Some example = ");
// console.log(value1); //true
// console.log(value2); //false

// const value3 = data.every((i) => i > 10);
// const value4 = data.every((i) => i > 3);
// console.log(" = Every example = ");
// console.log(value3); //false
// console.log(value4); //true

// console.log(" = Filter example = ");
// const users = [
//   { id: 1, name: "Jonh", isAdmin: true },
//   { id: 2, name: "Smith", isAdmin: true },
//   { id: 3, name: "David", isAdmin: false },
// ];
// const filtered = users.filter((item) => item.id == 2);
// console.log(filtered);

// let arr = [
//   { id: 1, name: "Jonh" },
//   { id: 2, name: "Smith" },
// ];

// arr.forEach(function (item) {
//   console.log(`ID: ${item.id}, имя: ${item.name}`);
// });

// const letters = ["a", "b", "c", "d"];
// const newLetters = letters.splice(2, 2);

// console.log(letters, newLetters);

// let weekend = ["Saturday", "Sunday"];
// let work = ["Monday", "Tuesday", "Wednesday"];

// // Старый способ
// let fullWeek = work.concat("Thursday", "Friday", weekend);
// console.log(fullWeek); // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

// // ES6 способ
// let fullWeekES6 = [...work, "Thursday", "Friday", ...weekend];
// console.log(fullWeekES6); // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);
function Hello(props) {
  return (
    <div>
      <p>Имя: {props.name}</p>
      <p>Возраст: {props.age}</p>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(
  <Hello name="Tom" age="33" />
);

console.log(Hello);
