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
  const match = await Matches.create({
    homeTeamId: body.homeTeamId,
    homeTeamGoals: body.homeTeamGoals,
    awayTeamId: body.awayTeamId,
    awayTeamGoals: body.awayTeamGoals,
    inProgesse: true,
  });
  return match;
};

export default { getAll, newMatch };
