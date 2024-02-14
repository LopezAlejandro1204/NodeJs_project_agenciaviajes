import express from 'express';
//importamos el controller
import {paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje}  from '../Controllers/paginaController.js';

import { guardarTestimonial } from '../Controllers/testimonialController.js';
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros)
router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje) //El comodin es como transporta a lo que qeuremos ver
                                    //sin la necesidad de crear muchas rutas
router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial) //Aqui hacemo el post del formulario

export default router;
