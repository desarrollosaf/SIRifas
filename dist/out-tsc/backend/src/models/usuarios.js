import { Model, DataTypes, } from 'sequelize';
import sequelize from '../database/connectionBiblioteca';
class Usuarios extends Model {
}
Usuarios.init({
    id: {
        autoIncrement: true,
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    nombre_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        defaultValue: true
    },
    psw: {
        type: DataTypes.STRING,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
}, {
    sequelize,
    tableName: 'usuarios',
    timestamps: true,
});
export default Usuarios;
//# sourceMappingURL=usuarios.js.map