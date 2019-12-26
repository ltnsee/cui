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
export interface ILocaleItems {
  lang: string;
  locale: string;
}
export interface IState {
  author: string;
  menu: IMenu[];
  localeItems: ILocaleItems[];
  locale: string;
  dialog: boolean;
  user: IUser;
}
