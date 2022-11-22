const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const Courses = sequelize.define("CURSO", {
    ID_CURSO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    NOME: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    DESCRICAO: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    DURACAO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, { freezeTableName: true, timestamps: false });


module.exports = Courses;
