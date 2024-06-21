const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')
const { getProducts,getProductsByID,updateProduct,deleteProduct,createProduct } = require('../controllers/productController')


router.get('/', getProducts)

router.get('/:id', getProductsByID)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.post('/', createProduct)

module.exports = router;