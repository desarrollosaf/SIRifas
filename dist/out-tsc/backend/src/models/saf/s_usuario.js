import { Model, DataTypes, } from 'sequelize';
import sequelize from '../../database/connection';
import Dependencia from '../saf/t_dependencia';
import Direccion from '../saf/t_direccion';
import Departamento from '../saf/t_departamento';
class SUsuario extends Model {
    static associate(models) {
        SUsuario.belongsTo(Dependencia, {
            // sourceKey: 'id_Dependencia',         
            foreignKey: 'id_Dependencia',
            as: 'dependencia',
        });
        SUsuario.belongsTo(Direccion, {
            // sourceKey: 'id_Direccion',         
            foreignKey: 'id_Direccion',
            as: 'direccion',
        });
        SUsuario.belongsTo(Departamento, {
            // sourceKey: 'id_Departamento',         
            foreignKey: 'id_Departamento',
            as: 'departamento',
        });
    }
}
SUsuario.init({
    id_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_Usuario'
    },
    N_Usuario: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'N_Usuario'
    },
    id_Dependencia: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_Dependencia'
    },
    id_Direccion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_Direccion'
    },
    id_Departamento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'id_Departamento'
    },
    Nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'Nombre'
    },
    A_Paterno: {
        type: DataTypes.STRING(25),
        allowNull: true,
        field: 'A_Paterno'
    },
    A_Materno: {
        type: DataTypes.STRING(25),
        allowNull: true,
        field: 'A_Materno'
    },
    C_Electronico: {
        type: DataTypes.STRING(70),
        allowNull: true,
        field: 'C_Electronico'
    },
    Contrasena: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: 'Contrasena'
    },
    Estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'Estado'
    },
    Puesto: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'Puesto'
    },
    f_ingreso: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'f_ingreso'
    },
    grado_estudios: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    grado_abreviado: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    curp: {
        type: DataTypes.STRING(18),
        allowNull: true,
    },
    telefono: {
        type: DataTypes.BIGINT,
        allowNull: true,
    },
    personal_secretarial_id: {
        type: DataTypes.INTEGER,
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
    tableName: 's_usuario',
    timestamps: false,
    paranoid: true,
    underscored: true,
    indexes: [
        {
            name: 'id_Usuario',
            using: 'BTREE',
            fields: [{ name: 'id_Usuario' }],
        },
    ],
});
export default SUsuario;
//# sourceMappingURL=s_usuario.js.map