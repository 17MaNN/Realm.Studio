'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import styles from './LogoWordmark.module.css';

const WORDMARK = 'Realm.Studio';

interface LogoWordmarkProps {
  className?: string;
}

export default function LogoWordmark({ className = '' }: LogoWordmarkProps) {
  const [compact, setCompact] = useState(false);

  // Once the hero has mostly scrolled past, the full wordmark folds into a monogram
  useEffect(() => {
    const hero = document.getElementById('hero');

    const sync = () => {
      const limit = hero
        ? hero.offsetTop + hero.offsetHeight * 0.55
        : window.innerHeight * 0.55;
      setCompact(window.scrollY > limit);
    };

    sync();
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);

    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  return (
    <Link
      href="/"
      className={className}
      data-compact={compact ? 'true' : 'false'}
      aria-label="Realm.Studio homepage"
    >
      <span className={styles.word} aria-hidden="true">
        {WORDMARK.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={`${styles.char} ${char === '.' ? styles.dot : ''}`}
            style={{ '--i': index } as CSSProperties}
          >
            {char}
          </span>
        ))}
      </span>

      <span className={styles.monogram} aria-hidden="true">
        <span>R</span>
        <span className={styles.monogramDot}>.</span>
        <span>S</span>
      </span>
    </Link>
  );
}
