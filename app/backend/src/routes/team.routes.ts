import { Router } from 'express';
import teamsController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter.get('/', teamsController.getAll);
teamRouter.get('/:id', teamsController.getById);

export default teamRouter;
