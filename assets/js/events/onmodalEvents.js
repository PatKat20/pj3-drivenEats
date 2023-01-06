function buttonCancelEvent (){
    const buttonCancel = document.getElementById("order-cancel")
    buttonCancel.addEventListener("click", _ => {
        const fade = document.querySelector("#fade")
        const modal = document.querySelector("#modal")
        fade.classList.add("hide")
        modal.classList.add("hide")
    })
}

export { buttonCancelEvent }