const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
