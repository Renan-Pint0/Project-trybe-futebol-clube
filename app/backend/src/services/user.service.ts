import Users from '../database/models/UserModel';
import { iUser } from '../interfaces';

const getByEmail = async (email: string): Promise<iUser> => {
  const user = await Users.findOne({ where: { email } });
  return {
    id: user?.dataValues.id,
    username: user?.dataValues.username,
    role: user?.dataValues.role,
    email: user?.dataValues.email,
    password: user?.dataValues.password,
  };
};

const getById = async (id: number): Promise<iUser> => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user as unknown as iUser;
};

export default { getByEmail, getById };
