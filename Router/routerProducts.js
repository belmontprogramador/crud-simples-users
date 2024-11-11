// Routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct } = require('../Controllers/ContrlloreProcudts/createProducts');
const authenticateToken = require('../Midlleware/authMiddleware');
const getAllProducts = require('../Controllers/ContrlloreProcudts/getProducts');
const getProductById = require('../Controllers/ContrlloreProcudts/getProductById')
const updateProduct = require('../Controllers/ContrlloreProcudts/updateProduct')
const deleteProduct = require('../Controllers/ContrlloreProcudts/deleteProduct')

// Rota para criar um novo produto (somente usuários autenticados)
router.post('/createproduct', authenticateToken, createProduct);

// Rota para obter produto (somente usuários autenticados)
router.get('/getallproducts', authenticateToken, getAllProducts)

//Rota para Obter produto por ID (somente usuários autenticados)
router.get('/getallproductsbyid/:id', authenticateToken, getProductById)

//Rota para Atualizar produto (somente usuários autenticados)
router.put('/:id', authenticateToken, updateProduct)

//Rota para Deletar produto (somente usuários autenticados)
router.delete('/:id', authenticateToken, deleteProduct);

module.exports = router;
