const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    heading: 'Sandbox',
    version: '0.1',
    subheading: "Trucker's Sandbox",
  });
});

module.exports = router;
