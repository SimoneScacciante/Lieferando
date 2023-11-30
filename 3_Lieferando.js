let shoppingCartNames = [];
let shoppingCartPrices = [];

let arrayMenu = [
    {
        'name': 'Pizza Salami',
        'recepte': ['Tomatensoße', 'Salami', 'Käse', 'Peperoni'],
        'price': 30,
    },

    {
        'name': 'Pasta Carbonara',
        'recepte': ['Tomatensoße', 'Apfel'],
        'price': 10,
    },

    {
        'name': 'Curry Wurst',
        'recepte': ['Kartoffel', 'Curry', 'Ketchup'],
        'price': 5,
    },

]

function init() {
    let basket = document.getElementById("foodID");
    basket.innerHTML = "";

    for (let i = 0; i < arrayMenu.length; i++) {
        const element = arrayMenu[i];
        basket.innerHTML += `
        
    <div class="menu-conatiner">
        <div class="menu-box">
            <div>
                <div>
                    <h1>${element['name']} </h1>
                </div>
                <div>${element['recepte']}</div>
            </div>

            <div class="menu-rightside">
                <div><h3>${element['price']} €</h3></div>
                <div><button onclick="addFood(${i})">Kaufen</button></div>
            </div>
        </div>
    </div>
     `;
    }
}

function addFood(index) {
    shoppingCartNames.push(arrayMenu[index]['name'])
    shoppingCartPrices.push(arrayMenu[index]['price'])

    let basket_2 = document.getElementById('warenkorbID');
    basket_2.innerHTML = "";

    for (let j = 0; j < shoppingCartNames.length; j++) {
        basket_2.innerHTML += `
        ${shoppingCartNames[j]} + ${shoppingCartPrices[j]} <br>
    
        `;
    }

    sumOfBasket();
}

function sumOfBasket() {

    let priceBasket = document.getElementById('priceID');
     priceBasket.innerHTML = "";

    let sum = 0

    for (let k = 0; k < shoppingCartPrices.length; k++) {
        sum += shoppingCartPrices[k]

        priceBasket.innerHTML += `
        <div>
        Die Summe beträgt ${shoppingCartPrices[k]} €
        </div>
        `
    }




}


/*
function updateProgressBar() {
    let percent = (currentQuestionJSON_Strings + 1) / questionsArray.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}
*/

