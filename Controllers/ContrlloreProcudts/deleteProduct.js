// Controller/Products/deleteProduct.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    if (product.userId !== userId) return res.status(403).json({ message: 'Acesso negado' });

    await prisma.product.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProduct;
