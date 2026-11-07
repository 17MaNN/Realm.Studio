'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const icons = {
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

type NavItem = {
  id: keyof typeof icons;
  label: string;
  href: string;
};

// Split around the centred logo mark: two sections each side of it
const leftItems: NavItem[] = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'studio', label: 'Studio', href: '#studio' },
];

const rightItems: NavItem[] = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const sectionIds = [...leftItems, ...rightItems].map((item) => item.id);

export default function NavBar() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>('work');
  const onHome = pathname === '/';

  // Highlight the section crossing the middle of the viewport
  useEffect(() => {
    if (!onHome) return;
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  // Arriving on the home page with a #hash (e.g. /#work from a case study)
  // needs a manual nudge — client-side routing does not scroll for us.
  useEffect(() => {
    if (!onHome) return;
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 80);
    return () => window.clearTimeout(timer);
  }, [onHome]);

  const current = pathname.startsWith('/work') ? 'work' : active;

  const renderItem = (item: NavItem) => {
    const isActive = current === item.id;
    const className = `${styles.item} ${isActive ? styles.itemActive : ''}`;
    const inner = (
      <>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[item.id]}
        </svg>
        <span className={styles.label}>{item.label}</span>
      </>
    );

    return (
      <li key={item.id}>
        {onHome ? (
          // A plain anchor lets the browser do the jump (html has smooth
          // scrolling and a scroll-padding-top for the fixed header)
          <a
            href={item.href}
            className={className}
            aria-current={isActive ? 'location' : undefined}
            title={item.label}
            // The URL already carries this hash, so the browser would ignore the
            // click and leave the reader wherever they scrolled to
            onClick={(event) => {
              if (window.location.hash !== item.href) return;
              event.preventDefault();
              document.getElementById(item.id)?.scrollIntoView();
            }}
          >
            {inner}
          </a>
        ) : (
          <Link
            href={`/${item.href}`}
            className={className}
            aria-current={isActive ? 'location' : undefined}
            title={item.label}
          >
            {inner}
          </Link>
        )}
      </li>
    );
  };

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <ul className={`${styles.pill} ${styles.pillLeft} ${styles.glass}`}>
        {leftItems.map(renderItem)}
      </ul>

      <ul className={`${styles.pill} ${styles.pillRight} ${styles.glass}`}>
        {rightItems.map(renderItem)}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
