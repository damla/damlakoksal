import { SiteConfig } from '@/types';
import { Links } from './routes';

export const siteConfig: SiteConfig = {
  name: 'Damla Köksal | Personal Website',
  description: "Damla Köksal's personal website.",
  title: 'Damla Köksal',
  content: {
    home: {
      title: 'Hi there! 👋',
      description:
        'I am Damla Köksal, a passionate software engineer based in Istanbul, Turkey 🇹🇷',
      company: {
        preDescription: 'Currently, I am focusing on software engineering advancements at',
        companyInfo: {
          name: 'Trendyol Group 💻',
          link: 'https://www.trendyol.com/'
        },
        postDescription: ', one of Turkey’s leading e-commerce platforms.'
      },
      passion: {
        description:
          'I am passionate about creating seamless user experiences and leveraging technology to solve real-world problems.'
      },
      contact: {
        description: 'Feel free to explore my portfolio or connect with me on',
        links: [
          {
            iconName: 'GithubIcon',
            link: Links.GITHUB
          },
          {
            iconName: 'LinkedinIcon',
            link: Links.LINKEDIN
          },
          {
            iconName: 'XIcon',
            link: Links.X
          }
        ]
      }
    }
  }
};
