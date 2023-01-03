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
    const urlEnconded = "https://wa.me/5521975109175?text=" + encodeURIComponent(getDishesInfo())

    formatButtonText(sendButtonText, contagemSelecionados)

    if (contagemSelecionados === 3) {
        sendButton.removeAttribute("disabled");
        sendButton.style.backgroundColor = "#32B72F"
        sendButton.setAttribute("href", urlEnconded)
        sendButton.style.cursor = "pointer";
        sendButton.style.fontWeight = "700"
    }
}

// Formata o texto do botão de acordo com a contagem de produtos
const formatButtonText = (buttonText, contagem) => {
    let itemInsert = contagem === 2 ? `item` : `itens`
    buttonText.innerHTML = contagem !== 3 ? `Selecione mais ${3 - contagem} ${itemInsert} para fechar o produto` : `Fechar Pedido`
}

// Pega os dados das receitas selecionadas e converte para uma mensagem
const getDishesInfo = () => {
    const selecionados = document.querySelectorAll(".selecionado")
    const selecionadosParaArray = Array.from(selecionados)

    const dishName = selecionadosParaArray[0] ? selecionadosParaArray[0].dataset.itemname : null
    const drinkName = selecionadosParaArray[1] ? selecionadosParaArray[1].dataset.itemname : null
    const dessertName = selecionadosParaArray[2] ? selecionadosParaArray[2].dataset.itemname : null
    let total = 0;
    total = selecionadosParaArray.reduce((accumulator, product) => accumulator + Number(product.dataset.itemprice), 0)

    return `Olá, gostaria de fazer o pedido:
    - Prato: ${dishName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
Total: R$ ${total.toFixed(2)}`
}

const setDishesInfoIntoModal = (dishname, drinkname, dessertname, total) => {
    return `
    <div id="fade"></div>
    <div class="modal">
        <header>
            <h3>Confirme seu pedido</h3>
        </header>
        <section class="order">
            <p></p>
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
