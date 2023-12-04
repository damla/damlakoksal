import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Links } from '@/config/routes';
import { Icon } from '@/components/general/icon/icon';

export default function Navbar() {
  return (
    <nav className="flex justify-between border-b-2 border-b-primary pb-2">
      <h1 className="text-2xl md:text-4xl font-bold text-primary">
        {siteConfig.title}
      </h1>
      <ul className="flex items-center gap-4">
        <Link
          href={Links.GITHUB}
          target="_blank"
          className="text-primary inline-flex flex-shrink"
        >
          <Icon name="GithubIcon" size={24} />
        </Link>
        <Link
          href={Links.LINKEDIN}
          target="_blank"
          className="text-primary inline-flex flex-shrink"
        >
          <Icon name="LinkedinIcon" size={24} />
        </Link>
        <Link
          href={Links.X}
          target="_blank"
          className="text-primary inline-flex flex-shrink"
        >
          <Icon name="XIcon" size={24} />
        </Link>
      </ul>
    </nav>
  );
}
