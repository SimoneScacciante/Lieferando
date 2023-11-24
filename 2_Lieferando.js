
let prices = [10, 5, 20];
let names = ['Cheeseburger', 'Pommes', 'Carbonara'];

let shoppingCartNames = [];
let shoppingCartPrices = [];

function food(selectedItemIndex) {
    shoppingCartNames.push(names[selectedItemIndex]);
    shoppingCartPrices.push(prices[selectedItemIndex]);
    let basket = document.getElementById("warenkorbID");
    basket.innerHTML = "";

    for (let shoppingBasketItemIndex = 0; shoppingBasketItemIndex < shoppingCartNames.length; shoppingBasketItemIndex++) {
        basket.innerHTML += `<div>
        <span>${shoppingCartNames[shoppingBasketItemIndex]}</span>
        <span>${shoppingCartPrices[shoppingBasketItemIndex]}</span>
        </div>`
        ;
    }

}



