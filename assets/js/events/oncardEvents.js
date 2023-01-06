import { verifyDishes, verifyDrinks, verifyDesserts } from "../content/verifyFunctions.js"

function onCardClick() {
    const cards = document.querySelectorAll(".products")
    cards.forEach(e => e.addEventListener("click", event => {
        verifyDishes(event)
        verifyDrinks(event)
        verifyDesserts(event)
    }))
}

export { onCardClick }