

const categoriesEl = document.querySelector(`#categories`);
const itemsEl = document.querySelectorAll(`.item`);


Array.prototype.forEach.call(itemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title} /  Elements: ${itemsLength}`);
    
});
