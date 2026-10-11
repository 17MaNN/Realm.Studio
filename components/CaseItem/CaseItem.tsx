import Image from 'next/image';
import Link from 'next/link';
import { WorkItem } from '@/data/work';
import styles from './CaseItem.module.css';

interface CaseItemProps {
  item: WorkItem;
  index: number;
}

export default function CaseItem({ item, index }: CaseItemProps) {
  const isEven = index % 2 === 1;

  return (
    <article className={`${styles.item} ${isEven ? styles.itemEven : ''}`}>
      <div className={styles.mediaCol}>
        <div
          className={styles.imageFrame}
          style={item.imageBg ? { backgroundColor: item.imageBg } : undefined}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={800}
            height={500}
            className={styles.image}
            style={{ objectFit: item.imageFit ?? 'cover' }}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        </div>
      </div>

      <div className={styles.textCol}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.summary}>{item.summary}</p>

        <ul className={styles.tagList} aria-label={`${item.title} tags`}>
          {item.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={`/work/${item.slug}`}
          className={styles.caseLink}
          aria-label={`Read the case study for ${item.title}`}
        >
          Read the case <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
