const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');
const { Users } = require('../models');
const logger = require('../utils/logger');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new Error("Not authorized");

    const [, token] = authHeader.split(' ');

    if (!token) throw new Error("Not authorized");

    const user = await Users.findOne({ where: { TOKEN: token } });

    if (!user) throw new Error("Not authorized");

    if (new Date(user.DATA_VALIDADE_TOKEN).getTime() < new Date().getTime()) throw new Error("Expired session");

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.user = decoded.id;

    return next();
  } catch (error) {
    logger.error(error);
    res.status(401).send({ error: error.message });
  }
};
