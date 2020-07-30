const express = require('express');
const app = express();
const path = require("path");

const homeRouter = require('./src/router/home.router');
const ProductRouter = require('./src/router/products.router');

app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "hbs");

app.use('/', homeRouter);
app.use('/products', ProductRouter);

app.listen(3001, () => {
    console.log("App is running on port 3001");
});