let showMenuArray = [
    {
        "name": "Cheeseburger",
        "price": 20,
    },

    {
        "name": "Pommes",
        "price": 5,
    }
];


let foodArray = ['Cheeseburger', 'Pommes'];
let priceArray = ['20', '5'];

let shoppingCartNames = [];
let shoppingCartPrices = [];

function showFood {
let basketShowFood = document.getElementById('showFoodID').innerHTML;
basketShowFood.innerHTML = "";

for (let j = 0; j < array.length; j++) {
    basketShowFood.innerHTML += `
    ${showMenuArray['name']}
    
    `
}

}


function food(selectedItems) {
    shoppingCartNames.push(foodArray[selectedItems]);
    shoppingCartPrices.push(priceArray[selectedItems]);

    let basket = document.getElementById('basket');
    basket.innerHTML = "";

    for (let i = 0; i < shoppingCartNames.length; i++) {
        basket.innerHTML += `
    ${shoppingCartNames[i]} + ${shoppingCartPrices[i]} <br>

`
    }
}