import { Icon } from '@/components/general/icon/icon';
import { Links, Routes } from '@/config/routes';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col justify-center text-secondary py-6 md:py-10">
      <h3 className="text-3xl md:text-5xl">Hi there! 👋</h3>
      <p className="text-xl md:text-2xl mt-8">
        I am Damla Köksal, a passionate software engineer based in Istanbul,
        Turkey 🇹🇷
      </p>
      <p className="text-xl md:text-2xl mt-8">
        Currently, I am enhancing the digital experience at{' '}
        <Link
          href={Links.TRENDYOL}
          target="_blank"
          className="text-accent underline"
        >
          Trendyol Group 💻
        </Link>
        , one of Turkey&apos;s leading e-commerce platforms.
      </p>
      <p className="text-xl md:text-2xl mt-8">
        I am passionate about creating seamless user experiences and leveraging
        technology to solve real-world problems.
      </p>
      <div className="text-xl md:text-2xl mt-8 flex gap-2">
        <span>
          Feel free to explore my portfolio or connect with me on{' '}
          <Link
            href={Links.GITHUB}
            target="_blank"
            className="inline-flex flex-shrink align-sub text-accent mr-1"
          >
            <Icon name="GithubIcon" size={24} />
          </Link>
          <Link
            href={Links.LINKEDIN}
            target="_blank"
            className="inline-flex flex-shrink align-sub text-accent mr-1"
          >
            <Icon name="LinkedinIcon" size={24} />
          </Link>
          <Link
            href={Links.X}
            target="_blank"
            className="inline-flex flex-shrink align-sub text-accent"
          >
            <Icon name="XIcon" size={24} />
          </Link>
        </span>
      </div>
    </section>
  );
}
