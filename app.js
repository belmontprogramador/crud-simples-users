const express = require('express');
const routerUser = require('./Router/routerUser');
const routerProducts = require('./Router/routerProducts')

const app = express();

 
app.use(express.json());

 
app.use(routerUser);
app.use(routerProducts)

module.exports = app;
