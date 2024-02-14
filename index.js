import express from 'express';

import router from './routes/index.js';
//Para la BD
import db from './config/db.js'

//dependencia de var de entorno
import dotenv from 'dotenv';

dotenv.config() //Para acceder a los valores de la variable de entorno


const app = express();

//conectar la BD
db.authenticate()
    .then(()=> console.log('base de datos conectado'))
    .catch(error => console.log(error));


//definir el puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug')

//Obtener el año actual
app.use((req,res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes"

    return next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica
app.use(express.static('public'));

//Agrega router
app.use('/', router); //use entiende todos los tipos de verbos que hay


app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});

