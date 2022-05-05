const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products', { data: products });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
