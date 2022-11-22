const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const Users = sequelize.define("USUARIO", {
    ID_USUARIO: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    NOME: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    EMAIL: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    SENHA: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    PERFIL: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    SITUACAO: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    },
    TOKEN: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    DATA_VALIDADE_TOKEN: {
        type: DataTypes.DATE,
        allowNull: true
    },
    DATA_CADASTRO: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: fn("now")
    },
    CPF: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
}, { freezeTableName: true, timestamps: false });


module.exports = Users;
