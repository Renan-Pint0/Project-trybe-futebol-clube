import { Response, Request } from 'express';
import teamsService from '../services/teams.service';

const getAll = async (req: Request, res: Response) => {
  const result = await teamsService.getAll();
  res.status(200).json(result);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idResult = Number(id);
  const result = await teamsService.getById(idResult);
  res.status(200).json(result);
};

export default { getAll, getById };
