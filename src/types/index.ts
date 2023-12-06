import { IconName } from '@/components/general/icon/icon';

export interface SiteConfig {
  name: string;
  description: string;
  title: string;
  content: Content;
}

interface Content {
  home: Home;
}

interface Home {
  title: string;
  description: string;
  company: Company;
  passion: Passion;
  contact: Contact;
}

interface Company {
  preDescription: string;
  companyInfo: CompanyInfo;
  postDescription: string;
}

interface CompanyInfo {
  name: string;
  link: string;
}

interface Passion {
  description: string;
}

interface Contact {
  description: string;
  links: Link[];
}

interface Link {
  iconName: IconName;
  link: string;
}
