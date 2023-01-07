import { produtosBD } from "./database/products.js";
import { render } from "./content/renders.js";
import { generate } from "./content/generateElements.js"
import { addOnCardClickEvent } from "./events/oncardEvents.js";

// Seletores e Variaveis
const sendButton = document.getElementById("sendButton");
const dishesList = document.getElementById("dishesList");
const drinksList = document.getElementById("drinksList");
const dessertList = document.getElementById("dessertList");

// Renderizadores
dishesList.innerHTML = render.productDataIntoHtml(produtosBD.dish);
drinksList.innerHTML = render.productDataIntoHtml(produtosBD.drink);
dessertList.innerHTML = render.productDataIntoHtml(produtosBD.dessert);

// Eventos

sendButton.addEventListener("click", e=> {
    if(sendButton.classList.contains("active")){
        generate.generateModal();
    }
})

addOnCardClickEvent()