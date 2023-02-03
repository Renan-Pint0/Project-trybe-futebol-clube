import { Router } from 'express';
import userController from '../controllers/user.controller';
import { userValidation } from '../middlewares/userValidation';

const userRouter = Router();

userRouter.post('/', userValidation, userController.getByEmail);
// userRouter.get('/validate', tokenValidation, userController.verifyToken);

export default userRouter;
