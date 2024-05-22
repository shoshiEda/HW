const jFile = require("jsonfile")
const path = require("path")


const FILE = path.join(__dirname, "../data/orders.json" )


const getOrders = () => {

    return jFile.readFile(FILE)
}

module.exports = {getOrders}