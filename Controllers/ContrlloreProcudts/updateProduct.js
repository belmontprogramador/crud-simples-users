// Controller/Products/updateProduct.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  const userId = req.user.userId;

  try {
    const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
    if (product.userId !== userId) return res.status(403).json({ message: 'Acesso negado' });

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, description, price },
    });
    res.json({ message: 'Produto atualizado com sucesso', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateProduct;
