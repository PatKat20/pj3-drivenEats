import { formatNumber } from "../utils/utils.js"
import { orders } from "../database/order.js"

const render = {}

render.productDataIntoHtml = productInfo => {
    return productInfo.reduce((accumulator, { id, nome: productName, desc, price: productPrice, img: productImg, type}) => {
       return accumulator += `
        <label for="${type + id}" 
        class="products" 
        data-test="${type}" 
        data-itemname="${productName}"
        data-itemprice="${productPrice}"
        data-itemtype="${type}"
        data-itemid="${id}">
            <div class="imgArea">
                <img src="${productImg}" alt="" width="144px">
            </div>
            <div class="descArea">
                <h4 data-test="item-name">${productName}</h4>
                <p class="desc">${desc}</p>
                <div class="priceArea">
                    <p data-test="item-price" class="price">R$ ${formatNumber(productPrice, false)}</p>
                    <img src="assets/img/Vector.svg" class="okayImg" width="16px"></img>
                </div>
            </div>
            
            <input type="radio" id="${type + id}" name="${type}" class="${type}">
        </label>
    `
    }, "")
}

render.dishesInfoIntoModal = ({dish, drink, dessert, total = orders.getTotal().toFixed(2)}) => {
    let [clientName, clientAddress] = getNumberAndAdress()

    const urlEnconded = "https://wa.me/5555555555555?text=" + encodeURIComponent(orderMessage(clientName, clientAddress))

    return `
        <div id="fade"></div>
        <div id="modal" data-test="confirm-order-modal">
            <header>
                <h3 id="modal-title">Confirme seu pedido</h3>
            </header>
            <section class="order">
                <ul id="order-list">
                    <li class="order-item"><span>${dish.name}</span> <span>${formatNumber(dish.price, false)}</span></li>
                    <li class="order-item"><span>${drink.name} </span> <span>${formatNumber(drink.price, false)}</span></li>
                    <li class="order-item"><span>${dessert.name} </span> <span>${formatNumber(dessert.price, false)}</span></li>
                    <li id="order-total"><span>Total</span> <span>R$ ${formatNumber(total, false)}</span></li>
                </ul>
                <div>
                    <a href="${urlEnconded}" target="_blank" id="order-accept" data-test="confirm-order-btn">Tudo certo, pode pedir!</a>
                    <button type="button" id="order-cancel" data-test="cancel-order-btn">Cancelar</button>
                </div>
            </section>
        </div>
    `
}

function getNumberAndAdress(){
    let clientName = prompt("Qual o seu nome?") || "Não Fornecido"
    let clientEndereco = prompt("Qual o seu endereço?")|| "Não fornecido"

    return [clientName, clientEndereco]
}

function orderMessage (clientName, clientAddress){
    let {dish, drink, dessert, total = orders.getTotal()} = orders.getOrderData()

    total = total.toString().replace(".", ",")
    return `Olá, gostaria de fazer o pedido:\n
    - Prato: ${dish.name}\n
    - Bebida: ${drink.name}\n
    - Sobremesa: ${dessert.name}\n
    Total: R$ ${total}\n
   
  \nNome: ${clientName}\n
    Endereço : ${clientAddress}\n
`
}

export { render }