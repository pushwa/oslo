const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.delete('/:productId', async (req, res) => {
  try {
    const removeProduct = await Product.remove({ _id: req.params.productId });
    res.json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
