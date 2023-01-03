const prodObj = {}

prodObj.dishes = [
    {id:1, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:2, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:3, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:4, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:5, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:6, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:7, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:8, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:9, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:10, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png", type:"dish" },
    {id:11, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png", type:"dish" },
    {id:12, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png", type:"dish" },
    {id:13, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png", type:"dish" },
]

prodObj.drinkes = [
    {id:1, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:2, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:3, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:4, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:5, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:6, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:7, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
    {id:8, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png",  type:"drink" },
]

prodObj.desserties = [
    {id:1, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:2, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:3, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:4, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:5, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
]

prodObj.convertDateIntoHtml = productInfo => {
    return productInfo.reduce((accumulator, { id, nome: productName, desc, price: productPrice, img: productImg, type}) => {
       return accumulator += `
        <label for="${type + id}" class="products" data-test="${type}">
            <div class="imgArea">
                <img src="${productImg}" alt="">
            </div>
            <div class="descArea">
                <h4 data-dishName="${productName}">${productName}</h4>
                <p class="desc">${desc}</p>
                <p data-dishPrice="${productPrice}" class="price">${productPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </div>
            <input type="radio" id="${type + id}" name="${type}" class="${type}">
        </label>
    `
    }, "")
}