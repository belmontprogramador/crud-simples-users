const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
 
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

   
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '8h', 
    });

 
    res.json({ token, userId: user.id  });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
