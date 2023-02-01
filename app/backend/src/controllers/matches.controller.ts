import { Response, Request } from 'express';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const result = await matchesService.getAll(inProgress as string | undefined);
  res.status(200).json(result);
};

export default { getAll };
