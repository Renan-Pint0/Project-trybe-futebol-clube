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

const newMatch = async (matchData: iMatches) => {
  // const home = await Matches.findByPk(matchData.homeTeamId);
  // const away = await Matches.findByPk(matchData.awayTeamId);
  // if (!home || !away) {
  //   return {
  //     status: 'not found',
  //     message: 'There is no team with such id!',
  //   };
  // }
  // if (matchData.homeTeamId === matchData.awayTeamId) {
  //   return {
  //     status: 'equal teams',
  //     message: 'It is not possible to create a match with two equal teams',
  //   };
  // }
  const match = await Matches.create({
    homeTeamId: matchData.homeTeamId,
    homeTeamGoals: matchData.homeTeamGoals,
    awayTeamId: matchData.awayTeamId,
    awayTeamGoals: matchData.awayTeamGoals,
    inProgress: true,
  });
  console.log(match);
  return match;
};

const getByid = async (id: number): Promise<iMatches> => {
  const result = await Matches.findByPk(id);
  return result as iMatches;
};

const finishMatch = async (id: number): Promise<iMatches> => {
  const match = await Matches.findByPk(id);
  await match?.update({ inProgress: false });
  await match?.save();
  return match as iMatches;
};
const updateMatch = async (id: number, body: iMatches): Promise<iMatches> => {
  const match = await Matches.findByPk(id);
  match?.set(body);
  await match?.save();
  return match as iMatches;
};

export default { getAll, newMatch, updateMatch, getByid, finishMatch };
