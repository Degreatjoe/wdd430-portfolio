'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/projects', label: 'Projects' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="max-w-4xl mx-auto px-4 flex justify-between items-center"
    >
      <ul className="flex gap-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={isActive ? 'font-semibold underline underline-offset-4' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
