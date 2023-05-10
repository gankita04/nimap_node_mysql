require('dotenv').config();
// const connection = require('./database/db')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const productR = require('./routes/productRoute');
const categoryR = require('./routes/catRoute');

app.use('/products', productR);
app.use('/categories', categoryR);

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`port is connected at ${port}`)
});
