import { Model, DataTypes, } from 'sequelize';
import sequelize from '../database/connectionBiblioteca';
import Role from './roles';
class RoleUsers extends Model {
}
RoleUsers.init({
    id: {
        autoIncrement: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    role_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false
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
    tableName: 'role_users',
    timestamps: true,
});
RoleUsers.belongsTo(Role, {
    foreignKey: "role_id", as: "role"
});
export default RoleUsers;
//# sourceMappingURL=role_user.js.map