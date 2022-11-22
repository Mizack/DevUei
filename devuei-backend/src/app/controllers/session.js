const logger = require("../utils/logger");
const { Users } = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require("../../config/auth");

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ where: { EMAIL: email } });

        if (!user || !(await bcrypt.compare(password, user.SENHA))) throw new Error("Invalid email or password.");

        if(!user.SITUACAO) throw new Error("Deactivated user");

        const token = jwt.sign({ id: user.ID_USUARIO }, authConfig.secret, { expiresIn: authConfig.expiresIn });

        const expireTokenDate = new Date(
            new Date().setDate(new Date().getDate() + parseInt(authConfig.expiresIn.replace(/[^0-9]/g, '')))
        );

        await user.update({
            TOKEN: token,
            DATA_VALIDADE_TOKEN: expireTokenDate
        });

        res.status(201).send({
            name: user.NOME,
            token: user.TOKEN,
            tokenValidity: user.DATA_VALIDADE_TOKEN
        });
    } catch (error) {
        logger.error(error);
        res.status(401).send({ error: error.message });
    }
};
