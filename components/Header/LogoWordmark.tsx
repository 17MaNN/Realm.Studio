'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LogoWordmark.module.css';

interface LogoWordmarkProps {
  className?: string;
  onNavigate?: () => void;
}

export default function LogoWordmark({ className = '', onNavigate }: LogoWordmarkProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      aria-label="Realm.Studio — home"
      onClick={() => {
        onNavigate?.();
        if (pathname !== '/') return;

        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
        }

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      }}
    >
      <span className={styles.wordmark}>
        Realm<span className={styles.dot}>.</span>Studio
      </span>
    </Link>
  );
}
