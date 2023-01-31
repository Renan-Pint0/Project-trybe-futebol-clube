import { iTeams } from '../interfaces';
import Teams from '../database/models/TeamModel';

const getAll = async (): Promise<iTeams[]> => {
  const result = await Teams.findAll();
  return result;
};

const getById = async (id: number): Promise<iTeams> => {
  const result = await Teams.findByPk(id);
  return {
    id: result?.dataValues.id,
    teamName: result?.dataValues.teamName,
  };
};

export default { getAll, getById };
