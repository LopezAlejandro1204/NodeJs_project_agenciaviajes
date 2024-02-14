import { Testimonial } from "../models/testimoniales.js";
const guardarTestimonial = async (req,res) =>{
    //Validar...
    const{nombre, correo, mensaje} = req.body;

    const errores = [];

    //quitamos los blancos al inicio y final
    if(nombre.trim() === ''){
        errores.push({mensaje: 'Nombre esta vacio'})
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'})
    }
    if(errores.length > 0){
        //Consultar Testimoniales existentes
        const testimoniales = await Testimonial.findAll()
        //Mostrar la vista con errores
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores: errores,
            nombre: nombre,
            correo: correo,
            mensaje: mensaje,
            testimoniales: testimoniales
        })
    }else{
        //Almacenarlo en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }

    }
}
export {
    guardarTestimonial
}
