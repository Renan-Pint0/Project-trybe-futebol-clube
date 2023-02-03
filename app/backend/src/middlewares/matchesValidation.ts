import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

const matchtokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const user = jwt.verify(token, secret as string);
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default matchtokenValidation;
