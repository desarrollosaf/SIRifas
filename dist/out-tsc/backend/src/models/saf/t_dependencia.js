import { Model, DataTypes, } from 'sequelize';
import sequelize from '../../database/connection';
import SUsuario from './s_usuario';
class Dependencia extends Model {
    static associate(models) {
        Dependencia.hasMany(SUsuario, {
            foreignKey: "id_Dependencia", as: "m_usuarios"
        });
    }
}
Dependencia.init({
    id_Dependencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'id_Dependencia'
    },
    C_presupDep: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'C_presupDep'
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'Nombre'
    },
    Creado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Creado'
    },
    F_Creacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'F_Creacion'
    },
    U_Modificacion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'U_Modificacion'
    },
    Estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Estado'
    },
    orden: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nombre_completo: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
}, {
    sequelize,
    tableName: 't_dependencia',
    timestamps: false,
});
// Dependencia.hasMany(SUsuario,{
//   foreignKey: "id_Dependencia", as: "m_usuarios"
// })
export default Dependencia;
//# sourceMappingURL=t_dependencia.js.map