const express = require('express');
const { createproduct } = require('../controller/product.controller');
const router = express.Router();
const Products = require('../controller/product.controller');

router.get('/products/:id',Products.createproduct);
router.get('/products?:id',Products.getproducts);


module.exports=router;