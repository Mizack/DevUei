const { DataTypes, fn } = require("sequelize");
const sequelize = require("../../databases/sequelizeConnection");

const Comments = sequelize.define("COMENTARIOS", {
    ID_COMENTARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    COMENTARIO: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    AVALIACAO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    DATA_COMENTARIO: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.DATE(fn("NOW"))
    },
    COMENTARIO_ID_USUARIO: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: 'USUARIO',
            key: 'ID_USUARIO'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    },
    COMENTARIO_ID_CURSO: {
        type: DataTypes.STRING(36),
        allowNull: false,
        references: {
            model: 'CURSO',
            key: 'ID_CURSO'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    },
}, { freezeTableName: true, timestamps: false });


module.exports = Comments;
