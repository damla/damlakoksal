'use client';

import Link from 'next/link';
import { Links } from '@/config/routes';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 py-8">
      <span className="text-primary">&copy;{new Date().getFullYear()}</span>
      <Link href={Links.GITHUB} className="text-primary">
        Damla Köksal.
      </Link>
      <span className="text-primary">All rights reserved.</span>
    </footer>
  );
}
