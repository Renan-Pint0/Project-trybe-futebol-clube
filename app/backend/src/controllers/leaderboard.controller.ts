import { Request, Response } from 'express';
import leaderboardService from '../services/leaderboard.service';

const createLeaderboardHome = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.createLeaderboard('"home"');

  return res.status(200).json(result.message);
};

const createLeaderboardAway = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.createLeaderboard('"away"');

  return res.status(200).json(result.message);
};

const createLeaderboar = async (req: Request, res: Response): Promise<Response> => {
  const result = await leaderboardService.createLeaderboard('"home", "away"');

  return res.status(200).json(result.message);
};

export default {
  createLeaderboardHome,
  createLeaderboardAway,
  createLeaderboar,
};
