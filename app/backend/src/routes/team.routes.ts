import { Router } from 'express';
import teamsController from '../controllers/teams.controller';

const teamRouter = Router();

teamRouter.get('/', teamsController.getAll);

export default teamRouter;
