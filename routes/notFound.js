const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
  res.render('notFound', {
    heading: 'Page not found',
    subHeading: 'The requested URL was not found on the server.',
  });
});

module.exports = router;
