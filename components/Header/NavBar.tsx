'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const icons = {
  hero: <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  work: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  studio: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17.5 9 5 9-5" />
    </>
  ),
  services: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

const items = [
  { id: 'hero', label: 'Home', href: '/' },
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'studio', label: 'Studio', href: '/#studio' },
  { id: 'services', label: 'Services', href: '/#services' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>('hero');

  // Highlight the section crossing the middle of the viewport
  useEffect(() => {
    if (pathname !== '/') return;
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const current = pathname.startsWith('/work') ? 'work' : active;

  return (
    <nav className={`${styles.pill} ${styles.glass}`} aria-label="Primary navigation">
      <ul className={styles.items}>
        {items.map((item) => {
          const isActive = current === item.id;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                aria-current={isActive ? 'location' : undefined}
                title={item.label}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[item.id]}
                </svg>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
