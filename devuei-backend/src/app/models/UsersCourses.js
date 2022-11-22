const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const UsersCourses = sequelize.define("CURSO_USUARIO", {
    ID_CURSO_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    SOMENTE_BASICO: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 1
    },
    SITUACAO: {
        type: DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0
    },
    DATA_CADASTRO: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE(fn("NOW"))
    },
    DIA_VENCIMENTO: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    CURSO_USUARIO_ID_USUARIO: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: 'USUARIO',
            key: 'ID_USUARIO'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    },
    ID_CURSO: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: 'CURSO',
            key: 'ID_CURSO'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    }
}, { freezeTableName: true, timestamps: false });


module.exports = UsersCourses;
