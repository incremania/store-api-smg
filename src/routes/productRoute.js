const express = require('express');
const router = express.Router();
const { getAllProduct, createProduct} = require('../controllers/productController')
const { uploadImage } = require('../controllers/uploadImageContoller')

router
.get('/', getAllProduct)
.post('/', createProduct)
.post('/upload', uploadImage)


module.exports = router