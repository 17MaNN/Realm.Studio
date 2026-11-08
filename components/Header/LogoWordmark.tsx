'use client';

import Image from 'next/image';
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
      <Image
        src="/images/realm-studio-logo.png"
        alt=""
        width={313}
        height={198}
        priority
        sizes="(max-width: 899px) 52px, 60px"
        className={styles.image}
      />
    </Link>
  );
}
