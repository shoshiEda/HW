const JSONRepo = require("../repos/JSONRepo")
const WSRepo = require("../repos/WSRepo.js")

const getShopData = async() => {

    const {orders} = await JSONRepo.getOrders()

    const {data:products} = await WSRepo.getProducts()
    console.log(products)

    function findOrder(orderId){
        const idx = orders.findIndex(order =>order.produdtId===orderId)
        if(idx===-1) return {}
        else {
            return {amount: orders[idx].amount,orderData: orders[idx].orderData}
        }
    }

    const data = products.map(product=>{
        return{
        id:product.id,
        title:product.title,
        orders:findOrder(product.id)
        }
    })
    return data 
}

module.exports = {getShopData}