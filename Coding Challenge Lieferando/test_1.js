let menus = ['Pizza Salami', 'Carbonara', 'Suppe'];
let prices = [10, 15, 5];
let amounts = [1, 1, 1];


function getValueFromInput  (id) {
return document.getElementById(id).value;
}

function getMenuFromInput (id) {
return getValueFromInput('menu').trim();
}

function getPriceFromInput (id) {
    return Number(getValueFromInput('price'));
}