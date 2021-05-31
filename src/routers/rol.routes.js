import {Router} from 'express'

const router = Router();

import * as rolesCtrl  from '../controllers/rol.controller'

router.get('/', rolesCtrl.readAllRoles);
router.get('/:id', rolesCtrl.readRoles);
router.delete('/:id', rolesCtrl.delRol);
router.post('/', rolesCtrl.createRoles);
router.put('/:id', rolesCtrl.updateRoles);

 export default router;