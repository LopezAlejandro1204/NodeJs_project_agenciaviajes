import sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config() //Para acceder a los valores de la variable de entorno
//valores a oasar - nombre de la BD - nombre del usuario
//                  - password - serie de configuraciones
const db = new sequelize(process.env.DATABASE_URL,{

    define: {
        timestamps: false
    },
    //Luego son configuraciones puras de sequalize
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatoAliases: false
});

export default db;


