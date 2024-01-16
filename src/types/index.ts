export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

// Director
export interface Role {
  name: string;
}

export interface Country {
  name: string;
}

export interface Member {
  image: string;
  first_name: string;
  last_name: string;
  roles: Role[];
  countries: Country;
}
