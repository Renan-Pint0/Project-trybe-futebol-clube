import express = require('express');
import leaderboardController from '../controllers/leaderboard.controller';

const leaderbordRouter = express.Router();

leaderbordRouter.get('/home', leaderboardController.createLeaderboardHome);
leaderbordRouter.get('/away', leaderboardController.createLeaderboardAway);
leaderbordRouter.get('/', leaderboardController.createLeaderboar);

export default leaderbordRouter;
