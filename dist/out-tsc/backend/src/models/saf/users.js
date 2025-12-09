import { Model, DataTypes, } from 'sequelize';
import sequelize from '../../database/connection';
import SUsuario from './s_usuario';
class UsersSafs extends Model {
}
UsersSafs.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
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
    rfc: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    cambio_contrasena: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    whats: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cel: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    path_foto: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: true,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: true,
    },
    deletedAt: {
        field: 'deleted_at',
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 'users_safs',
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
        {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
        },
        {
            name: 'users_safs_rfc_unique',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'rfc' }],
        },
    ],
});
UsersSafs.hasOne(SUsuario, {
    sourceKey: 'rfc', // Campo en UsersSafs
    foreignKey: 'N_Usuario', // Campo en SUsuario
    as: 'datos_user',
});
export default UsersSafs;
//# sourceMappingURL=users.js.map