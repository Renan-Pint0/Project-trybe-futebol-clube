import { Router } from 'express';
import { tokenValidation } from '../middlewares/userValidation';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.post('/', tokenValidation, matchesController.newMatch);

export default matchesRouter;
