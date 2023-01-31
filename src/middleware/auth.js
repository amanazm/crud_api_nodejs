const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers["x-api-key"];

  if (!token) {
    return res.status(403).send("Missing Token");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Unauthorized Access");
  }
  return next();
};

module.exports = verifyToken;