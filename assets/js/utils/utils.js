function formatNumber(price){
    return price.toFixed(2).replace(".", ",")
}

export {formatNumber}