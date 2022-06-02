export type TopBarProps = {
  loggedIn: boolean;
  loggedContent: any;
  menuOptions: {
    label: string;
    path: string;
  }[];
}