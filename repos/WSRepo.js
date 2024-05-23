const axios = require("axios")

const URL = 'https://localhost:8001';

const getProducts = () => {
   return axios.get(`${URL}`)
}

module.exports = {getProducts}