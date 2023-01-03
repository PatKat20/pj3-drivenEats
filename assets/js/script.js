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

// Funções
const verifyCheckedInput = foodArray => {
    foodArray.forEach(input =>{
        if(input.checked){
            input.parentElement.classList.add("selecionado")
        } else{
            input.parentElement.classList.remove("selecionado")
        }
    })
}

const verifySelectedDishes = () =>{
    const selecionados = document.querySelectorAll(".selecionado").length
    const sendButton = document.getElementById("sendButton")
    const sendButtonText = document.querySelector(".sendButtonText")

    let itemInsert = selecionados === 2 ? `item` : `itens` 
    sendButtonText.innerHTML = selecionados !== 3 ? `Selecione mais ${3 - selecionados} ${itemInsert} para fechar o produto` : `Fechar Pedido`

    if(selecionados === 3){
        sendButton.removeAttribute("disabled");
        sendButton.style.backgroundColor = "#32B72F"
        sendButton.style.cursor = "pointer";
        sendButton.style.fontWeight = "700"
    }
}

// Eventos
productList.addEventListener("click", _=>{
    verifyCheckedInput(dishes)
    verifySelectedDishes()
 })

drinksList.addEventListener("click", _=>{
    verifyCheckedInput(drinks)
    verifySelectedDishes()
 })

 dessertList.addEventListener("click" , _=>{
    verifyCheckedInput(desserties)
    verifySelectedDishes()
 })



