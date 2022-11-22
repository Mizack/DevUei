const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authConfig = require("../../config/auth");
const { Users } = require("../models");
const { Op } = require('sequelize');
const logger = require("../utils/logger");

const create = async (req, res) => {
    try {
        const { name, email, password, profile, cpf } = req.body;

        const findUser = await Users.findOne({
            where: {
                [Op.or]: [
                    { CPF: cpf },
                    { EMAIL: email }
                ]
            }
        });

        if (findUser) throw new Error("User already registered. Please, insert new email or cpf.");

        const passwordHash = await bcrypt.hash(password, 8);

        const user = await Users.create({
            NOME: name,
            EMAIL: email,
            SENHA: passwordHash,
            PERFIL: profile,
            CPF: cpf
        });

        const token = jwt.sign({ id: user.ID_USUARIO }, authConfig.secret, { expiresIn: authConfig.expiresIn });

        const expireTokenDate = new Date(
            new Date().setDate(new Date().getDate() + parseInt(authConfig.expiresIn.replace(/[^0-9]/g, '')))
        );

        await user.update({
            TOKEN: token,
            DATA_VALIDADE_TOKEN: expireTokenDate
        });

        res.status(201).send({
            user: {
                name: user.NOME,
                email: user.EMAIL,
                token: user.TOKEN,
                profile: user.PERFIL ? "Usuário" : "Administrador"
            }
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const read = async (req, res) => {
    try {
        const user = await Users.findByPk(req.user);

        res.status(200).send(user);
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const data = req.body;

        const user = await Users.findByPk(req.user);

        if (!user) throw new Error('User not found');
        
        if(data.email) {
            const emailExists = await Users.findOne({ where: { EMAIL: data.email } });
            if(emailExists) throw new Error('Email already registered');
        }

        if(data.cpf) {
            const cpfExists = await Users.findOne({ where: { CPF: data.cpf } });
            if(cpfExists) throw new Error('CPF already registered');
        }

        let passwordHash;

        if(data.password) {
            passwordHash = await bcrypt.hash(data.password, 8);
        }

        const dataParse = {
            NOME: data.name ? data.name : user.NOME,
            EMAIL: data.email ? data.email : user.EMAIL,
            SENHA: data.password ? passwordHash : user.SENHA,
            CPF: data.cpf ? data.cpf : user.CPF
        };

        await user.update({ ...dataParse });

        res.status(200).send({ 
            name: user.NOME,
            email: user.EMAIL 
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const deleteOne = async (req, res) => {
    try {
        const user = await Users.findByPk(req.user);

        if (!user) throw new Error('User not found');

        await user.update({ SITUACAO: 0, TOKEN: "deactivated", DATA_VALIDADE_TOKEN: new Date() });

        res.status(200).json({ 
            name: user.NOME,
            email: user.EMAIL,
            active: user.SITUACAO ? true : false
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
};

const reactivated = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.userId);

        if (!user) throw new Error('User not found');

        await user.update({ SITUACAO: 1, TOKEN: "reactivated", DATA_VALIDADE_TOKEN: new Date() });

        res.status(200).json({ 
            name: user.NOME,
            email: user.EMAIL ,
            active: user.SITUACAO ? true : false
        });
    } catch (error) {
        logger.error(error);
        res.status(400).send({ error: error.message });
    }
}

module.exports = {
    create,
    read,
    update,
    deleteOne,
    reactivated
};
