const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')


const getProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const getProductsByID = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);

        if (!products) {
            res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        const Updatedproducts = await Product.findById(id);
        res.status(200).json(Updatedproducts);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);

        if (!products) {
            res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        res.status(200).json(products);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

const createProduct = asyncHandler(async (req, res) => {

    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}
)
module.exports = {
    getProducts, getProductsByID, updateProduct, deleteProduct, createProduct
}