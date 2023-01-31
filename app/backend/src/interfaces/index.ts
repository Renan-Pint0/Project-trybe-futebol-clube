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

export { iLogin, iUser, iTeams };
