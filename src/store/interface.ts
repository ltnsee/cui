export interface IUser {
  token: string | null;
}

export interface IState {
  author: string;
  user: IUser;
}
