import { Model, DataTypes, } from 'sequelize';
import sequelize from '../database/connectionBiblioteca';
class Rifa extends Model {
}
Rifa.init({
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_premio: {
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
    tableName: 'rifa',
    timestamps: true,
});
export default Rifa;
//# sourceMappingURL=rifa.js.map