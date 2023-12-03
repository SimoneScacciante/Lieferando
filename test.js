let foodArray = [
    {
        'name': 'Cheeseburger',
        'recepte': ['Zwiebel','Tomate'],
        'price': 10,
    },

    {
        'name': 'Pommes',
        'recepte': ['Zwiebel','Tomate'],
        'price': 5,
    },

    {
        'name': 'Pasta',
        'recepte': ['Zwiebel','Tomate'],
        'price': 20,
    }


];

let nameArray = [];
let priceArray = [];


function init() {
    let TextHier1 = document.getElementById('TextHier1');
    TextHier1.innerHTML = "";

    for (let i = 0; i < foodArray.length; i++) {
        const element = foodArray[i];

        TextHier1.innerHTML += `
    ${element['name']} + ${element['price']} + ${element['recepte']} <button onclick="addFood(${i})">Kaufen</button><br>
    `
    }
}

function addFood (kaufen) {
nameArray.push(foodArray[kaufen]['name']);
priceArray.push(foodArray[kaufen]['price']);

let TextHier2 = document.getElementById('TextHier2');
TextHier2.innerHTML = "";

for (let j = 0; j < nameArray.length; j++) {
    TextHier2.innerHTML += `
    <br>
    ${nameArray[j]} + ${priceArray[j]} <br>
    
    `
    
}

}



