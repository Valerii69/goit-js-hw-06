//example.com?user[name]=John&user[age]=30&user[address][city]=Kyiv&user[address][zip]=01001

function parseQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    const keys = key.split(/\[|\]/).filter((k) => k); // Розбиваємо ключі на окремі частини
    let current = result;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {}; // Створюємо вкладені об'єкти, Створюємо порожній об'єкт, якщо його ще немає
      }
      current = current[keys[i]]; // Переходимо всередину об'єкта
    }

    current[keys[keys.length - 1]] = value; // Призначаємо значення
  }

  return result;
}

// використання
const url ="https://example.com?user[name]=John&user[age]=30&user[address][city]=Kyiv&user[address][zip]=01001";
const queryString = url.split("?")[1]; // Отримуємо частину з параметрами запиту
const nestedObject = parseQueryString(queryString);

console.log(nestedObject);
