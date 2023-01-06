import { produtosBD } from "./database/products.js";
import { render } from "./content/renders.js";
import { generate } from "./content/generateElements.js"
import { onCardClick } from "./events/oncardEvents.js";
import { orders } from "./database/order.js";

// Seletores e Variaveis
const sendButton = document.getElementById("sendButton")

// Renderizadores
dishesList.innerHTML = render.productDataIntoHtml(produtosBD.dishes)
drinksList.innerHTML = render.productDataIntoHtml(produtosBD.drinks)
dessertList.innerHTML = render.productDataIntoHtml(produtosBD.desserts)

// Eventos

sendButton.addEventListener("click", e=> {
    const pedido = orders.getOrderData()
    if(sendButton.classList.contains("active")){
        console.log(pedido)
        generate.generateModal()
    }
})

onCardClick()
