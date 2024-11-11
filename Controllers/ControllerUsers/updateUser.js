const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, age, address } = req.body;

  try {
    
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        age,
        password: password ? hashedPassword : undefined,  
        address,
      },
    });

    res.status(200).json("Informações Atualizadas");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
