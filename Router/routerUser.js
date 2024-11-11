const express = require('express');

const routerUser = express.Router();

//Midlewares
const authenticateToken= require('../Midlleware/authMiddleware')

//Controllers
const createUser= require('../Controllers/ControllerUsers/createUser');
const login = require('../Controllers/ControllerUsers/loginController');
const updateUser = require('../Controllers/ControllerUsers/updateUser')
const deleteUser = require('../Controllers/ControllerUsers/deleteUser')
const helloWord = require('../Controllers/ControllerUsers/helloWord')


// Rota para criar um novo usuário
routerUser.post('/createusers', createUser);

// Rota para login
routerUser.post('/login', login);

// Rota de atualização do usuário
routerUser.put('/updateuser/:id', authenticateToken, updateUser);

// Rota de delete do usuário
routerUser.delete('/deleteuser/:id', authenticateToken, deleteUser);

routerUser.get('/helo', helloWord)




module.exports = routerUser;
