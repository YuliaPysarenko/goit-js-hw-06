const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulIngredientsEl = document.getElementById(`ingredients`);

const ingredientsEl = document.createElement(`li`);
ingredientsEl.classList.add(`item`);
ingredientsEl.textContent = 'Potatoes';
  
  
const ingredientsMushroomsEl = document.createElement(`li`);
ingredientsMushroomsEl.classList.add(`item`);
ingredientsMushroomsEl.textContent = 'Mushrooms';

  
const ingredientsGarlicEl = document.createElement(`li`);
ingredientsGarlicEl.classList.add(`item`);
ingredientsGarlicEl.textContent = 'Garlic';

 
const ingredientsTomatosEl = document.createElement(`li`);
ingredientsTomatosEl.classList.add(`item`);
ingredientsTomatosEl.textContent = 'Tomatos';

 
const ingredientsHerbsEl = document.createElement(`li`);
ingredientsHerbsEl.classList.add(`item`);
ingredientsHerbsEl.textContent = 'Herbs';


const ingredientsCondimentsEl = document.createElement(`li`);
ingredientsCondimentsEl.classList.add(`item`);
ingredientsCondimentsEl.textContent = 'Condiments';



ulIngredientsEl.append(ingredientsEl, ingredientsMushroomsEl, ingredientsGarlicEl,
  ingredientsTomatosEl, ingredientsHerbsEl, ingredientsCondimentsEl);
