import { Router } from 'express';

import getMiddlewares from '../utils/get-middlewares';
import { config } from '../../config/index';

const router = Router();

router.get('/users/:id', getMiddlewares(config.middewares.users.getById));
router.post('/users/', getMiddlewares(config.middewares.users.create));
router.patch('/users/:id', getMiddlewares(config.middewares.users.update));
router.delete('/users/:id', getMiddlewares(config.middewares.users.delete));

export { router as ApiRouter };

