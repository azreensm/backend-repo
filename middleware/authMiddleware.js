const { admin } = require("../config/admin");
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
  const idToken = req.headers['authorization'];

  if (!idToken) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = jwt.decode(idToken, { complete: true });
    console.log({decodedToken});
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Failed to authenticate token', error: error.message });
  }
};

module.exports = authMiddleware;
