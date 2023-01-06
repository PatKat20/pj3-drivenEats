import { verifyCheckedInput, verifySelectedDishes } from "../content/verifyFunctions.js"

function onCardClick() {
    const cards = document.querySelectorAll(".products")
    cards.forEach(e => e.addEventListener("click", event => {
        verifyDishes(event)
        verifyDrinks(event)
        verifyDesserts(event)
    }))
}

function verifyDishes(event) {
    let target = event.target
    if (target.classList.contains("dish")) {
        const dishes = document.querySelectorAll('.dish')
        verifyCheckedInput(dishes)
        verifySelectedDishes()
    }
}

function verifyDrinks(event) {
    let target = event.target
    if (target.classList.contains("drink")) {
        const drinks = document.querySelectorAll('.drink')
        verifyCheckedInput(drinks)
        verifySelectedDishes()
    }
}

function verifyDesserts(event) {
    let target = event.target
    if (target.classList.contains("dessert")) {
        const desserts = document.querySelectorAll(".dessert")
        verifyCheckedInput(desserts)
        verifySelectedDishes()
    }
}

export { onCardClick }