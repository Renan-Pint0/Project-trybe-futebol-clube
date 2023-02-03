import { Router } from 'express';
import matchtokenValidation from '../middlewares/matchesValidation';
import matchesController from '../controllers/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.post('/', matchtokenValidation, matchesController.newMatch);
matchesRouter.patch('/:id/finish', matchesController.finishMatch);
matchesRouter.patch('/:id', matchesController.updateMatch);

export default matchesRouter;
