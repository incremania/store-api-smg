const Product = require('../models/ProductModel')
const asyncWrapper = require('../middlewares/asyncWrapper')
const { StatusCodes } = require('http-status-codes')


const createProduct = asyncWrapper(async(req, res) => {
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product })
})

const getAllProduct = async(req, res) => {
    const products = await Product.find({})
    res.status(200).json({ products})
}


module.exports = {
    createProduct,
    getAllProduct
}