import { Response, Request } from 'express';
// import { iCreateMatch } from '../interfaces';
import matchesService from '../services/matches.service';

const getAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  const result = await matchesService.getAll(inProgress as string | undefined);
  res.status(200).json(result);
};

const newMatch = async (req: Request, res: Response) => {
  const matchData = req.body;
  if (matchData.homeTeamId === matchData.awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  const home = await matchesService.getByid(matchData.homeTeamId);
  const away = await matchesService.getByid(matchData.awayTeamId);
  if (!home || !away) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  const result = await matchesService.newMatch(matchData);
  // if (result.status === 'not found') {
  //   res.status(404).json({ message: 'There is no team with such id!' });
  // }
  // if (result.status === 'equal teams') {
  //   res.status(422).json({ message: 'It is not possible to create a match with two equal teams' });
  // }
  return res.status(201).json(result);
};

const finishMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idResult = Number(id);
  await matchesService.finishMatch(idResult);
  return res.status(200).json({ message: 'Finished' });
};

const updateMatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const reqBody = req.body;
  const idResult = Number(id);
  await matchesService.updateMatch(idResult, reqBody);
  return res.status(200).json({ message: 'Match updated' });
};

export default { getAll, newMatch, updateMatch, finishMatch };
