let counterValue = 0;
  const valueEl = document.querySelector('#value');
  const decrementBtn = document.querySelector('[data-action="decrement"]');
  const incrementBtn = document.querySelector('[data-action="increment"]');

  decrementBtn.addEventListener('click', () => {
    counterValue -=1;
    
    valueEl.textContent = counterValue;
    console.log(counterValue);
  });

  incrementBtn.addEventListener('click', () => {
    counterValue +=1;
    
    valueEl.textContent = counterValue;
    console.log(counterValue);
  });