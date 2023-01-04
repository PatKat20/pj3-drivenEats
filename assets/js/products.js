const prodObj = {}

prodObj.dishes = [
    {id:1, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:2, nome: "Salmao", desc: "Dalmao grelhado com legumes", price: 20.40, img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg" , type:"dish"},
    {id:3, nome: "Omelete", desc: "Talvez nao seja omelete", price: 10.00, img: "https://cdn.pixabay.com/photo/2018/08/31/19/13/pumpkin-soup-3645375__340.jpg" , type:"dish"},
    {id:4, nome: "Panqueca", desc: "Panquecas como almoço, delicia", price: 17.50, img: "https://cdn.pixabay.com/photo/2016/11/22/23/45/pancakes-1851249__340.jpg" , type:"dish"},
    {id:5, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:6, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:7, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
    {id:8, nome: "Frango Yin Yang", desc: "Um pouco de batata, um pouco de salada", price: 14.90, img: "assets/img/frango_yin_yang.png" , type:"dish"},
]

prodObj.drinks = [
    {id:1, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 8.00, img: "assets/img/coca-cola.png", type:"drink" },
    {id:2, nome: "Fanta Uva", desc: "Lata 350ml", price: 7.00, img: "http://rostiehouse.com.br/wp-content/uploads/2018/10/fanta-uva-lata.jpg", type:"drink" },
    {id:3, nome: "Guarana Antartica", desc: "Lata 350ml", price: 6.50, img: "https://imgs.via.com.br/55019908/3g.jpg?imwidth=292", type:"drink" },
    {id:4, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png", type:"drink" },
    {id:5, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png", type:"drink" },
    {id:6, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png", type:"drink" },
    {id:7, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png", type:"drink" },
    {id:8, nome: "Coquinha Gelada", desc: "Lata 350ml", price: 4.90, img: "assets/img/coca-cola.png", type:"drink" },
   
]

prodObj.desserts = [
    {id:1, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:2, nome: "Chocolate mousse", desc: "Chocolate mousse", price: 15.50, img:"https://img.delicious.com.au/Bxyg9oxN/del/2022/05/chocolate-mousse-with-cherry-ripe-168604-1.png", type: "dessert" },
    {id:3, nome: "Bolinhos", desc: "Bolinhos diversos", price: 10.00, img:"https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=", type: "dessert" },
    {id:4, nome: "Brownie", desc: "Brownie de chocolate", price: 7.00, img:"https://insanelygoodrecipes.com/wp-content/uploads/2021/08/Gluten-Free-Chocolate-Chip-Brownies-683x1024.jpg", type: "dessert" },
    {id:5, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Gluten-Free-Kahlua-Dessert_exps49655_THHC1997839C05_20_6bC_RMS.jpg", type: "dessert" },
    {id:6, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
    {id:7, nome: "Pudim", desc: "Apenas pudim", price: 7.90, img:"assets/img/pudim.png", type: "dessert" },
]

prodObj.convertDateIntoHtml = productInfo => {
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
                <img src="${productImg}" alt="" width="144px" height="82px">
            </div>
            <div class="descArea">
                <h4 data-test="item-name">${productName}</h4>
                <p class="desc">${desc}</p>
                <div class="priceArea">
                    <p data-test="item-price" class="price">${productPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    <img src="assets/img/Vector.svg" class="okayImg" width="16px"></img>
                </div>
            </div>
            
            <input type="radio" id="${type + id}" name="${type}" class="${type}">
        </label>
    `
    }, "")
}
