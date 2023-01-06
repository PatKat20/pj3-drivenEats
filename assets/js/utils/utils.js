function formatNumber(price, useDot = true){
    const priceNumber = Number(price)
    const priceFormated = priceNumber.toFixed(2)
    return useDot ? priceFormated : priceFormated.replace(".", ",")
}


export {formatNumber}