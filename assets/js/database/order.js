const orders = {};

const ORDERDATA = {
    dish:{},
    drink:{},
    dessert:{},
};

orders.getTotal = () => {
    const sumTotal = Object.values(ORDERDATA).reduce((acc, val) => acc + Number(val.price), 0);
    return sumTotal.toFixed(2)
};

orders.getLastFood = (category) =>{
    return {... ORDERDATA[category] }
}

orders.insertOrder = (orderSelected) =>{
    const itemData = orderSelected.dataset
    ORDERDATA[itemData.itemtype] = {
        id : itemData.itemid,
        name : itemData.itemname, 
        price: itemData.itemprice,  
    }
};

orders.getOrderData = () => {
    return { ...ORDERDATA }
};

export { orders };
