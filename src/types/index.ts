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


export interface Plan {
  price: string;
  content: string;
  devices: string;
  free_trial: string;
  cancel_anytime: string;
  hdr: string;
  dolby_atmos: string;
  ad_free: string;
  offline_viewing: string;
  family_sharing: string;
}