
let names = ['Cheeseburger', 'Pommes', 'Carbonara'];
let prices = ['10', '5', '20'];

let shoppingCartNames = [];
let shoppingCartPrices = [];

function food(selectedItemIndex) {
    shoppingCartNames.push(names[selectedItemIndex]);
    shoppingCartPrices.push(prices[selectedItemIndex]);
    renderBasket();
}

function renderBasket() {
    let basket = document.getElementById('warenkorbID');
    basket.innerHTML = "";

    for (let i = 0; i < shoppingCartNames.length; i++) {
        basket.innerHTML += `
        <div>
        <span> ${shoppingCartNames[i]} </span> 
        <span> ${shoppingCartPrices[i]} </span>
        </div>        
        `
    }
}



