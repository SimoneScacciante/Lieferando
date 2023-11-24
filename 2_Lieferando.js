
let prices = ['10', '5', '20'];
let names = ['Cheeseburger', 'Pommes', 'Carbonara'];
let shoppingCart = [];

function food() {

    for (let i = 0; i < prices.length; i++) {
        const food = document.getElementById('warenkorbID').innerHTML += `
        ${names[i]} + ${prices[i]}€ <br>
        `;
    }
}



