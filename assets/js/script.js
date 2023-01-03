// Seletores e Variaveis
const productList = document.querySelector("#dishesList")
const drinkList = document.querySelector("#drinksList")
const dessertList = document.querySelector("#dessertList")

productList.innerHTML = prodObj.convertDateIntoHtml(prodObj.dishes)
drinksList.innerHTML = prodObj.convertDateIntoHtml(prodObj.drinkes)
dessertList.innerHTML = prodObj.convertDateIntoHtml(prodObj.desserties)

// Renderizadores
const dishes = document.querySelectorAll('.dish')
const drinks = document.querySelectorAll(".drink")
const desserties = document.querySelectorAll(".dessert")





