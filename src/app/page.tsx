import { Icon } from '@/components/general/icon/icon';
import { Links, Routes } from '@/config/routes';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Home() {
  const {
    content: { home }
  } = siteConfig;

  return (
    <section className="flex flex-col justify-center text-secondary py-6 md:py-10">
      <h3 className="text-3xl md:text-5xl"> {siteConfig.content.home.title}</h3>
      <p className="text-xl md:text-2xl mt-8">{home.description}</p>
      <p className="text-xl md:text-2xl mt-8">
        {home.company.preDescription}{' '}
        <Link
          href={home.company.companyInfo.link}
          target="_blank"
          className="text-accent underline"
        >
          {home.company.companyInfo.name}
        </Link>
        {home.company.postDescription}
      </p>
      <p className="text-xl md:text-2xl mt-8">{home.passion.description}</p>
      <div className="text-xl md:text-2xl mt-8 flex gap-2">
        <span>
          {home.contact.description}{' '}
          <>
            {home.contact.links.map((item, index) => (
              <Link
                key={`item-${index}`}
                href={item.link}
                target="_blank"
                className="inline-flex flex-shrink align-sub text-accent mr-1"
              >
                <Icon name={item.iconName} size={24} />
              </Link>
            ))}
          </>
        </span>
      </div>
    </section>
  );
}
