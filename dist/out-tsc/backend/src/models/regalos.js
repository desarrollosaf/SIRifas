import { Model, DataTypes, } from 'sequelize';
import sequelize from '../database/connectionBiblioteca';
class Regalos extends Model {
}
Regalos.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    premio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    tableName: 'premios',
    timestamps: true,
});
export default Regalos;
//# sourceMappingURL=regalos.js.map