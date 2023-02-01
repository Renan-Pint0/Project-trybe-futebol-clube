import { Router } from 'express';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;
