interface iLogin {
  email: string;
  password: string;
}

interface iUser extends iLogin {
  id?: number;
  username: string;
  role: string;
}

export { iLogin, iUser };
