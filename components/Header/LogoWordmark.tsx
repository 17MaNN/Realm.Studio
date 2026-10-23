'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import styles from './LogoWordmark.module.css';

const WORDMARK = 'Realm.Studio';

interface LogoWordmarkProps {
  className?: string;
}

export default function LogoWordmark({ className = '' }: LogoWordmarkProps) {
  return (
    <Link href="/" className={className} aria-label="Realm.Studio homepage">
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
    </Link>
  );
}
