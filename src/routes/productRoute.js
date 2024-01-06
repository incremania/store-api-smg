const express = require('express');
const router = express.Router();
const { getAllProduct, createProduct} = require('../controllers/productController')
const { uploadImages } = require('../controllers/uploadImageContoller')

router
.get('/', getAllProduct)
.post('/', createProduct)
.post('/upload', uploadImages)


module.exports = router