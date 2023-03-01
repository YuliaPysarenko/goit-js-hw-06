const counter = {
    counterValue: 0,
    decremenClick() {
        this.counterValue -= 1;
    },

    incrementClick() {
        this.counterValue += 1;
    },
};

const buttonDecrementEl = document.querySelector(`[data-action="decrement"]`);
const buttonIncrementEl = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);

buttonDecrementEl.addEventListener(`click`, onButtonDecrementClick);
buttonIncrementEl.addEventListener(`click`, onButtonIncrementClick);

function onButtonDecrementClick() {
    counter.decremenClick();
    valueEl.textContent = counter.counterValue;
}

function onButtonIncrementClick() {
    counter.incrementClick();
    valueEl.textContent = counter.counterValue;
}

