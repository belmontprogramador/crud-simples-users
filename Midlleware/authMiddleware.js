const jwt = require('jsonwebtoken');
require('dotenv').config();  

const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  
  
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado: token não fornecido' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.user = user; 
    next();
  });
};

module.exports = authenticateToken;
