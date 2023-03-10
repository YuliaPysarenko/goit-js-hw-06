
const buttonEl = document.querySelector(`.change-color`);
const spanColorEl = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, getButtonClick);
spanColorEl.addEventListener(`span`, getButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getButtonClick(event) {
  document.body.style.backgroundColor = getRandomHexColor(event.currentTarget);
  spanColorEl.textContent = getRandomHexColor(event.currentTarget.value);
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color
//  и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

