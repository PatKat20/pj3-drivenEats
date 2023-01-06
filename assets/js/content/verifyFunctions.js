import { orders } from "../database/order.js"

// Sempre que chamada ela vai verificar a lista dos produtos para saber quem está selecionado e quem não está
const verifyCheckedInput = foodArray => {
    foodArray.forEach(input => {
        if (input.checked) {
            input.parentElement.classList.add("selecionado")
            orders.insertOrder(input.parentElement)
        } else {
            input.parentElement.classList.remove("selecionado")
        }
    })
}

// Faz a verificação dos pratos selecionados e caso tenha 3 ele formata o botão de enviar
const verifySelectedDishes = () => {
    const sendButtonText = document.querySelector(".sendButtonText")
    let contagemSelecionados = document.querySelectorAll(".selecionado").length

    formatButtonText(sendButtonText, contagemSelecionados)

    if (contagemSelecionados === 3) {
        sendButton.removeAttribute("disabled");
        sendButton.classList.add("active")
    }
}

function formatButtonText(buttonText, contagem) {
    let itemInsert = contagem === 2 ? `item` : `itens`
    buttonText.innerHTML = contagem !== 3 ? `Selecione mais ${3 - contagem} ${itemInsert} para fechar o pedido` : `Fechar Pedido`
}

export {verifyCheckedInput, verifySelectedDishes}