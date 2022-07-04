const Product = require('../models/product')
const createProductCotroller = async (req, res) => {
    try {
        res.status(201).json({ status: 201, message: 'Product added successfully' });
    } catch (err) {
        if (!err.status) {
            err.status = 500;
            err.message = `Internal Server Error`
        }
        res.status(err.status).json({ status: err.status, message: err.message })
    }
}
const getProductsCotroller = async (req, res) => {
    try {
        // const products = await Product.find();
        return res.status(200).json({ status: 200, message: `Products sent successfully` })
    } catch (err) {
        if (!err.status) {
            err.status = 500;
            err.message = `Internal Server Error`
        }
        console.log(err)
        return res.status(err.status).json({ status: err.status, message: err.message })
    }
}
const updateProductCotroller = async (req, res) => {
    try {
        res.status(200).json({ status: 200, message: `Product updated successfully` })
    } catch (err) {
        if (!err.status) {
            err.status = 500;
            err.message = `Internal Server Error`
        }
        res.status(err.status).json({ status: err.status, message: err.message })
    }
}
const deleteProductCotroller = async (req, res) => {
    try {
        const { id } = req.query;
        res.status(200).json({ status: 200, message: `Product deleted successfully` })
    } catch (err) {
        console.log(err);
        if (!err.status) {
            err.status = 500;
            err.message = `Internal Server Error`
        }
        res.status(err.status).json({ status: err.status, message: err.message })
    }
}
module.exports = {
    createProductCotroller,
    getProductsCotroller,
    updateProductCotroller,
    deleteProductCotroller
}