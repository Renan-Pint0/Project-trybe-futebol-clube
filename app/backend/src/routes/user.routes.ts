import { Router } from 'express';
import userController from '../controllers/user.controller';
import userValidation from '../middlewares/userValidation';

const router = Router();

router.post('/', userValidation, userController.getByEmail);

export default router;
