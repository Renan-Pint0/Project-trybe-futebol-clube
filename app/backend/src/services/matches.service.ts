// import { iMatches } from '../interfaces';
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

export default { getAll };
