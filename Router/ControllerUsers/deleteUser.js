const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json("Usuário deletado com sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
