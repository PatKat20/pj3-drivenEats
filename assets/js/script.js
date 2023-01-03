// Seletores e Variaveis

const dishesList = document.querySelector("#dishesList")
const drinkList = document.querySelector("#drinksList")
const dessertList = document.querySelector("#dessertList")

dishesList.innerHTML = prodObj.convertDateIntoHtml(prodObj.dishes)
drinksList.innerHTML = prodObj.convertDateIntoHtml(prodObj.drinks)
dessertList.innerHTML = prodObj.convertDateIntoHtml(prodObj.desserts)

const sendButton = document.getElementById("sendButton")

// Renderizadores
const dishes = document.querySelectorAll('.dish')
const drinks = document.querySelectorAll(".drink")
const desserts = document.querySelectorAll(".dessert")

// Funções

// Sempre que chamada ela vai verificar a lista dos produtos para saber quem está selecionado e quem não está
const verifyCheckedInput = foodArray => {
    foodArray.forEach(input => {
        if (input.checked) {
            input.parentElement.classList.add("selecionado")
        } else {
            input.parentElement.classList.remove("selecionado")
        }
    })
}

// Faz a verificação dos pratos selecionados e caso tenha 3 ele formata o botão de enviar
const verifySelectedDishes = () => {
    const sendButtonText = document.querySelector(".sendButtonText")
    const contagemSelecionados = document.querySelectorAll(".selecionado").length

    formatButtonText(sendButtonText, contagemSelecionados)

    if (contagemSelecionados === 3) {
        sendButton.removeAttribute("disabled");
        sendButton.style.backgroundColor = "#32B72F"
        sendButton.style.cursor = "pointer";
        sendButton.style.fontWeight = "700"
    }
}

// Formata o texto do botão de acordo com a contagem de produtos
const formatButtonText = (buttonText, contagem) => {
    let itemInsert = contagem === 2 ? `item` : `itens`
    buttonText.innerHTML = contagem !== 3 ? `Selecione mais ${3 - contagem} ${itemInsert} para fechar o pedido` : `Fechar Pedido`
}

// Pega os dados das receitas selecionadas e converte para uma mensagem
const generateOrderMessage = () => {
    const [dishName, , drinkName, , dessertName, , total] = getDishesData()
    return `Olá, gostaria de fazer o pedido:
    - Prato: ${dishName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
Total: R$ ${total.toFixed(2)}`
}

const getDishesData = () => {
    const selecionados = document.querySelectorAll(".selecionado")
    const selecionadosParaArray = Array.from(selecionados)

    const dishName = selecionadosParaArray[0] ? selecionadosParaArray[0].dataset.itemname : null
    const dishPrice = selecionadosParaArray[0] ? selecionadosParaArray[0].dataset.itemprice : null
    const drinkName = selecionadosParaArray[1] ? selecionadosParaArray[1].dataset.itemname : null
    const drinkPrice = selecionadosParaArray[1] ? selecionadosParaArray[1].dataset.itemprice : null
    const dessertName = selecionadosParaArray[2] ? selecionadosParaArray[2].dataset.itemname : null
    const dessertPrice = selecionadosParaArray[2] ? selecionadosParaArray[2].dataset.itemprice : null

    let total = 0;
    total = selecionadosParaArray.reduce((accumulator, product) => accumulator + Number(product.dataset.itemprice), 0)

    return [dishName, dishPrice, drinkName, drinkPrice, dessertName, dessertPrice, total]
}

const setDishesInfoIntoModal = (dishname, dishPrice, drinkname, drinkPrice, dessertname, dessertPrice, total) => {
    const urlEnconded = "https://wa.me/5521975109175?text=" + encodeURIComponent(generateOrderMessage())

    return `
        <div id="fade"></div>
        <div id="modal" data-test="confirm-order-modal">
            <header>
                <h3 id="modal-title">Confirme seu pedido</h3>
            </header>
            <section class="order">
                <ul id="order-list">
                    <li class="order-item"><span>${dishname}</span> <span>${dishPrice.toFixed(2)}</span></li>
                    <li class="order-item"><span>${drinkname} </span> <span>${drinkPrice.toFixed(2)}</span></li>
                    <li class="order-item"><span>${dessertname} </span> <span>${dessertPrice.toFixed(2)}</span></li>
                    <li id="order-total"><span>Total</span> <span>R$ ${total.toFixed(2)}</span></li>
                </ul>
                <div>
                    <a href="${urlEnconded}" target="_blank" id="order-accept" data-test="confirm-order-btn">Tudo certo, pode pedir!</a>
                    <button type="button" id="order-cancel" data-test="cancel-order-btn">Cancelar</button>
                </div>
            </section>
        </div>
    `
}

// Eventos

dishesList.addEventListener("click", _ => {
    verifyCheckedInput(dishes)
    verifySelectedDishes()
})

drinksList.addEventListener("click", _ => {
    verifyCheckedInput(drinks)
    verifySelectedDishes()
})

dessertList.addEventListener("click", _ => {
    verifyCheckedInput(desserts)
    verifySelectedDishes()
})

sendButton.addEventListener("click", _ => {
    const modalArea = document.querySelector(".modalArea")
    modalArea.classList.remove("hide")
    const [dishName, dishPrice, drinkName, drinkPrice, dessertName, dessertPrice, total] = getDishesData()
    let dishPriceConvert = Number(dishPrice)
    let drinkPriceConvert = Number(drinkPrice)
    let dessertPriceConvert = Number(dessertPrice)
    
    modalArea.innerHTML = setDishesInfoIntoModal(dishName, dishPriceConvert, drinkName, drinkPriceConvert, dessertName, dessertPriceConvert, total)
   
    const buttonCancel = document.getElementById("order-cancel")
    buttonCancel.addEventListener("click", _ => {
       const fade = document.querySelector("#fade")
       const modal = document.querySelector("#modal")
       fade.classList.add("hide")
       modal.classList.add("hide")
    })
    
})

