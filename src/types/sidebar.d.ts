export type TSubMenu = { name: string; link: string }[];
export type TMenu = {
  name: string;
  link: string;
  subMenu: TSubMenu;
}[];
export type TSidebar = { name: string; menu: TMenu }[];
