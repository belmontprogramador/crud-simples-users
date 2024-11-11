// Controller/Products/getProductById.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductById;
