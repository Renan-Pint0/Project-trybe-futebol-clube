interface iLogin {
  email: string;
  password: string;
}

interface iUser extends iLogin {
  id?: number;
  username: string;
  role: string;
}

interface iTeams {
  id?: number;
  teamName: string;
}

interface iMatches {
  id?: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export { iLogin, iUser, iTeams, iMatches };
