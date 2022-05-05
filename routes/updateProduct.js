const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.patch('/:productId', async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          txt: req.body.txt,
        },
      }
    );
    res.json(updateProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
