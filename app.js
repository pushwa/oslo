//
require('dotenv/config');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();

//
const index = require('./routes/index');
const newProduct = require('./routes/newProduct');
const product = require('./routes/product');
const products = require('./routes/products');
const removeProduct = require('./routes/removeProduct');
const updateProduct = require('./routes/updateProduct');
const notFound = require('./routes/notFound');

//
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

//
app.use(express.static(path.join(__dirname, '/public')));

//
app.set('view engine', 'ejs');

//
app.use(index);
app.use('/new', newProduct);
app.use('/product', product);
app.use('/products', products);
app.use('/remove', removeProduct);
app.use('/update', updateProduct);
app.use(notFound);

//
mongoose.connect(process.env.DB_CON, () => {
  console.log('Connected');
});

//
app.listen(3000);
