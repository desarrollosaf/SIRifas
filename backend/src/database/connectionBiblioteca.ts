import { Sequelize } from "sequelize"

const sequelizeBiblio = new Sequelize('rifas', 'homestead', 'secret', {
    host: '192.168.10.10',
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelizeBiblio 