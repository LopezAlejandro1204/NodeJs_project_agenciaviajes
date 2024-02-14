import Sequelize from "sequelize";
import db from '../config/db.js';
//definiendo modelos - se pone nombre de la tabla sql
export const Viaje = db.define('viajes', {
    //Usualmente aqui se pone lo que planeamos para el proyecto
    //Pero como la tabla ya existe pues...se pone los nombres de las columnas
    titulo: {
        type: Sequelize.STRING //tipo de datos
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },

});

