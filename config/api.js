const customer = ['getProductsCotroller'];
const supporter = [...customer,'deleteProductCotroller'];
const seller = [...customer,'createProductCotroller','updateProductCotroller'];
const admin = [...seller];
module.exports = {Permission : {customer,supporter,seller, admin}}

