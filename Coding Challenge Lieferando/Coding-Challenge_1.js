let menus = ['Salat', 'Suppe', 'Hamburger'];
let prices = [20, 7.5, 9];
let amounts = [1, 1, 1];

function getValueFromInput(id) {
    return document.getElementById(id).value;
}
function getMenuFromInput(id) {
    return getValueFromInput('menu').trim();
}
function getPriceFromInput(id) {
    let price = getValueFromInput('price');
    var x = Number(price)
    return x;

    // du könntest auch "return Number(getValueFromInput('price'));" statt Zeile 12-14

}
function onAddMenu(id) {
    let newMenu = getMenuFromInput();
    let newPrice = getPriceFromInput();
    let i = getMenuIndex(menu);
    if (i === -1) {
                // Menü ist nicht im Warenkorb vorhanden, füge es hinzu.
        menus.push(newMenu);
        prices.push(newPrice)
        amounts.push(1);
    } else {
                // Menü ist bereits im Warenkorb, erhöhe die Menge.
        amounts[i] = amounts[i] + 1;
    }
}
function getMenuIndex(menu) {
    let index = menus.indexOf(menu)
    return index;
    // Die Methode indexOf durchsucht das Array 'menus' nach dem Wert 'menu'.
    // Wenn 'menu' gefunden wird, gibt indexOf den Index zurück, an dem es gefunden wurde.
    // Wenn 'menu' nicht gefunden wird, gibt indexOf -1 zurück.

    // statt Zeile 32 und 33 separat zu schreiben kannst auch alles wie hier
    // zusammen schreiben: "return menus.indexOf(menu);"

}