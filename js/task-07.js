const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')
// console.dir(inputEl)

inputEl.addEventListener("input", event => {
    spanEl.style.fontSize = `${event.target.value}px`;
});

 