export interface NavbarZone {
  title: string;
  items: Item[];
}

export interface Item {
  title: string;
  icon: string;
  href: string;
  items: Item[];
}
