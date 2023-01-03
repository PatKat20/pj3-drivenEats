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



// Eventos
productList.addEventListener("click", _=>{
    verifyCheckedInput(dishes)
   
 })

drinksList.addEventListener("click", _=>{
    verifyCheckedInput(drinks)
    
 })

 dessertList.addEventListener("click" , _=>{
    verifyCheckedInput(desserties)
    
 })



