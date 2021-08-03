import { Router } from 'express';

import getMiddlewares from '../utils/get-middlewares';
import { config } from '../../config/index';

console.log(config.middewares);

const router = Router();

router.get('/users/:id', getMiddlewares(config.middewares.users.getById));
// router.post('/users/');
// router.patch('/users/:id');
// router.delete('/users/:id');

export { router as ApiRouter };

