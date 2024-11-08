const express = require('express');

const routerUser = express.Router();

//Midlewares
const authenticateToken= require('../Midlleware/authMiddleware')

//Controllers
const createUser= require('./ControllerUsers/createUser');
const login = require('./ControllerUsers/loginController');
const updateUser = require('./ControllerUsers/updateUser')
const deleteUser = require('./ControllerUsers/deleteUser')


// Rota para criar um novo usuário
routerUser.post('/createusers', createUser);

// Rota para login
routerUser.post('/login', login);

// Rota de atualização do usuário
routerUser.put('/updateuser/:id', authenticateToken, updateUser);

// Rota de delete do usuário
routerUser.delete('/deleteuser/:id', authenticateToken, deleteUser);




module.exports = routerUser;
