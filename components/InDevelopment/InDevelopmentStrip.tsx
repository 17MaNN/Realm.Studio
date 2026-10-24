'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { InDevelopmentItem } from '@/data/inDevelopment';
import { Underline } from '@/components/Doodles/Doodles';
import styles from './InDevelopment.module.css';

interface InDevelopmentStripProps {
  items: InDevelopmentItem[];
}

export default function InDevelopmentStrip({ items }: InDevelopmentStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (offset: number) => {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.headerRow}>
        <div>
          <p className={styles.eyebrow}>Currently building</p>
          <h2 id="in-development-heading" className={styles.heading}>
            In the{' '}
            <span className={styles.underlined}>
              workshop
              <Underline className={styles.underline} />
            </span>
          </h2>
          <p className={styles.subline}>
            Restaurant websites, booking systems and hospitality brand sites, mid-build.
          </p>
        </div>

        <div className={styles.controls} aria-label="Carousel navigation">
          <button
            type="button"
            className={styles.scrollButton}
            onClick={() => scrollByAmount(-260)}
            aria-label="Scroll left in development items"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.scrollButton}
            onClick={() => scrollByAmount(260)}
            aria-label="Scroll right in development items"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={stripRef}
        role="region"
        tabIndex={0}
        aria-label="In development projects carousel"
        className={styles.scrollStrip}
      >
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.imageFrame}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={300}
                height={400}
                className={styles.image}
                sizes="(max-width: 640px) 180px, 215px"
              />
            </div>
            <div className={styles.caption}>
              <h3 className={styles.projectName}>{item.name}</h3>
              <p className={styles.status}>{item.status}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
