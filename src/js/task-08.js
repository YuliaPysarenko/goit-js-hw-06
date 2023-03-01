/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнен
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
 а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

const formEl = document.querySelector(`.login-form`);
const inputAllEl = document.querySelectorAll(`input`);


formEl.addEventListener(`submit`, onFormSubmit);
formEl.addEventListener(`submit`, onInputErrorSabmit);
formEl.addEventListener(`submit`, onInputReset);


function onFormSubmit(event) {
  event.preventDefault();
    
  console.log(`prevent`);
    const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`name:`, name);
    console.log(`value:`, value);
  });
};


 
function onInputErrorSabmit() {
    inputAllEl.forEach(input => {
    if (input.value === '') {
        alert(`Всі поля мають бути заповнені!`)
    }
});
};

function onInputReset() {
 console.log(formEl.reset());
};

