const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    txt: req.body.txt,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
