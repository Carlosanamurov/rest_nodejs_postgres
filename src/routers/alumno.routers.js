import {Router} from 'express'

const router = Router();

import * as alumnoCtrl  from '../controllers/alumno.controller'
 router.get('/', alumnoCtrl.readAllAlumno);
 router.get('/:id', alumnoCtrl.readAlumno );
  
 export default router;