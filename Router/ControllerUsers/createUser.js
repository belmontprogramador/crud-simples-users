const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');  
const prisma = new PrismaClient();

const SALT_ROUNDS = 10;  

const createUser = async (req, res) => {
  const { name, email, password, age, address } = req.body;
  try {
   
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    
    
    const newUser = await prisma.User.create({
      data: {
        name,
        email,
        password: hashedPassword,  
        age,
        address,
      },
    });
    
    res.status(201).json("Usuario Criado com Sucesso");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createUser;
