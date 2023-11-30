let shoppingCartNames = [];
let shoppingCartPrices = [];

let arrayMenu = [
    {
        'name': 'Pizza Salami',
        'recepte': ['Tomatensoße', 'Salami', 'Käse'],
        'price': 30,
    },

    {
        'name': 'Pasta Carbonara',
        'recepte': ['Tomatensoße', 'Apfel'],
        'price': 20,
    },
]

function init() {
    let basket = document.getElementById("warenkorbID1");
    basket.innerHTML = "";

    for (let i = 0; i < arrayMenu.length; i++) {
        const element = arrayMenu[i];
        // ${element['name']} =  IST SELBE WIE = ${arrayMenu[i]['name']}, da nur abgekürzt
        basket.innerHTML += `<div>
        <span>${element['name']} <button onclick="food(${i})">ok</button></span> <br>
        <span>${element['recepte']}</span> <br>
        <span>${element['price']} €</span> <br> <br>
        </div>
        
        
        `
            ;
    }
}

function food(index) {
    shoppingCartNames.push(arrayMenu[index]['name'])
    shoppingCartPrices.push(arrayMenu[index]['price'])

    let basket_2 = document.getElementById('warenkorbID2');
    basket_2.innerHTML = "";

    for (let j = 0; j < shoppingCartNames.length; j++) {
        basket_2.innerHTML += `
        ${shoppingCartNames[j]} + ${shoppingCartPrices[j]} <br>
    
        `;
    }
}




/* <<<<===== CLEAN CODING (Selbe wie oben)======>>>>

function init() {
    let basket = document.getElementById("warenkorbID");
    basket.innerHTML = "";

    for (let i = 0; i < arrayMenu.length; i++) {
        menuLoad(i)
    }
}

function menuLoad(i) {
    let basket = document.getElementById("warenkorbID");
    const element = arrayMenu[i];
    
    basket.innerHTML += `<div>
        <span>${element['name']}</span> <br>
        <span>${element['recepte']}</span> <br>
        <span>${element['price']} €</span> <br> <br>
        </div>`
        ;
}
*/