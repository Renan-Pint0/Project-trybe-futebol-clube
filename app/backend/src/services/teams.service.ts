import Teams from '../database/models/TeamModel';

const getAll = async () => {
  const result = await Teams.findAll();
  return result;
};

export default { getAll };
