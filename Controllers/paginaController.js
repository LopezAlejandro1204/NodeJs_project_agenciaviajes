//Importamos el modelo definido previamente
import {Viaje} from '../models/Viaje.js'
import { Testimonial } from '../models/testimoniales.js';

const paginaInicio = async (req, res)=>{
    //Consultar 3 viajes del modelo viaje
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}))
    try {
        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
            pagina: 'inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);

    }

}
const paginaNosotros = (req, res)=>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res)=>{
    //Consultar la Base de Datos - model
    const viajes = await Viaje.findAll();
    console.log(viajes)

    //Ahora lo pasamos a la vista
    res.render('viajes', {
        pagina: 'Viajes',
        viajes: viajes
    });
}
const paginaTestimoniales = async (req, res)=>{
    try {
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales: testimoniales
        });
    } catch (error) {
        console.log(error)
    }

}

//muestra un viaje por su slug
const paginaDetalleViaje = async(req, res) =>{
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({where: {slug: slug}})
        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje: viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
