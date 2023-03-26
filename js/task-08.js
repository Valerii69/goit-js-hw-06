
const form = document.querySelector(".login-form")

// form.addEventListener("submit", onSubmit);

const fullSubmit = evt => {
    evt.preventDefault();
   
    const { email, password } = evt.currentTarget.elements;
     if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
              }
    
    const userData = { email: email.value, password: password.value }
  
    console.log(userData);
    evt.currentTarget.reset();
    }
          
    form.addEventListener("submit", fullSubmit);

