import * as bcrypt from 'bcryptjs';
import { Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import userService from '../services/user.service';

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const getByEmail = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userService.getByEmail(email);

  if (!user || !user.id) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  const userInfo = { id: user.id, email };
  const jwtConfig = { expiresIn: '1d' };
  const token = jwt.sign(userInfo, secret as string, jwtConfig);
  res.status(200).json({ token });
};

const verifyToken = async (req: Request, res: Response) => {
  // const { decoded: { data: { role } } } = req.body;
  // return res.status(200).json({ role });
  const { id } = req.body.user;
  const user = await userService.getById(Number(id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json({ role: user.role });
};

export default { getByEmail, verifyToken };
