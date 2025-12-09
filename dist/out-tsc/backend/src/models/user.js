import { Model, DataTypes, } from 'sequelize';
import sequelize from '../database/connectionBiblioteca';
class User extends Model {
}
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    remember_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
        {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
        },
    ],
});
export default User;
//# sourceMappingURL=user.js.map