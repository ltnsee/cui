export interface IUser {
  token: string | null;
}
export interface IMenu {
  link: string;
  name: string;
  icon?: string;
  subMenus?: IMenu[];
  roles?: any[] | Function;
}
export interface IState {
  author: string;
  menu: IMenu[];
  dialog: boolean;
  user: IUser;
}
