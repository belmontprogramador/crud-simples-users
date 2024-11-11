// Controller/productController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    // `req.user.userId` foi definido pelo middleware de autenticação
    const userId = req.user.userId;

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        userId, // Associa o produto ao usuário logado
      },
    });

    res.status(201).json({ message: 'Produto criado com sucesso', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct };
