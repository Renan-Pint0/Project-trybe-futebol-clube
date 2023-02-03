import { iMatches } from '../interfaces';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamModel';

const getAll = async (inProgress?: string) => {
  const result = await Matches.findAll({ include: [
    { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
    { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
  ],
  });
  if (inProgress === undefined) {
    return result;
  }
  return result.filter((res) => res.inProgress.toString() === inProgress);
};

const newMatch = async (body: iMatches): Promise<iMatches> => {
  const match = await Matches.create({ ...body, inProgess: true });
  return match;
};

const updateMatch = async (id: number): Promise<iMatches> => {
  const match = await Matches.findByPk(id);
  await match?.update({ inProgress: false });
  await match?.save();
  return match as iMatches;
};

const getByid = async (id: number): Promise<iMatches> => {
  const result = await Matches.findByPk(id);
  return result as iMatches;
};

export default { getAll, newMatch, updateMatch, getByid };
