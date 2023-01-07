import { verifyDishes, verifyDrinks, verifyDesserts } from "../content/verifyFunctions.js";

function onCardClick(event) {
        verifyDishes(event)
        verifyDrinks(event)
        verifyDesserts(event)
};

function addOnCardClickEvent(){
    const cards = document.querySelectorAll(".products")
    cards.forEach(e => e.addEventListener("click", event => onCardClick(event)))
}

export { addOnCardClickEvent };