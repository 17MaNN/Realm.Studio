import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { workList } from '@/data/work';
import styles from './caseStudy.module.css';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Pre-render all case study pages to static HTML at build time
export function generateStaticParams() {
  return workList.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const item = workList.find((w) => w.slug === params.slug);

  if (!item) {
    return {
      title: 'Case Study Not Found · Realm.Studio',
    };
  }

  return {
    title: `${item.title} · Case Study · Realm.Studio`,
    description: item.summary,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const item = workList.find((w) => w.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <article className={styles.pageContainer}>
      <div className="container">
        {/* Accessible back link */}
        <Link href="/#work" className={styles.backLink}>
          <span aria-hidden="true">←</span> Back to selected work
        </Link>

        {/* Case Study Header */}
        <header className={styles.header}>
          <div className={styles.metaRow}>
            <span>{item.client}</span>
            <span aria-hidden="true">·</span>
            <span>{item.year}</span>
          </div>

          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.summary}>{item.summary}</p>

          <ul className={styles.tagList} aria-label="Project disciplines">
            {item.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </header>

        {/* Featured Case Study Image */}
        <div
          className={styles.heroImageFrame}
          style={item.imageBg ? { backgroundColor: item.imageBg } : undefined}
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            width={800}
            height={500}
            className={styles.heroImage}
            style={{ objectFit: item.imageFit ?? 'cover' }}
            priority
            sizes="(max-width: 1240px) 100vw, 1200px"
          />
        </div>

        {item.imageNote ? (
          <p className={`hand ${styles.imageNote}`}>{item.imageNote}</p>
        ) : null}

        {/* Narrative Details Grid */}
        <div className={styles.detailsGrid}>
          <aside className={styles.sidebar} aria-label="Project deliverables">
            <div className={styles.sidebarBlock}>
              <h2 className={styles.sidebarHeading}>Client</h2>
              <p className={styles.sidebarItem}>{item.client}</p>
            </div>

            <div className={styles.sidebarBlock}>
              <h2 className={styles.sidebarHeading}>Timeline</h2>
              <p className={styles.sidebarItem}>{item.year}</p>
            </div>

            <div className={styles.sidebarBlock}>
              <h2 className={styles.sidebarHeading}>Deliverables</h2>
              <ul className={styles.sidebarList}>
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className={styles.sidebarItem}>
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.mainContent}>
            <section className={styles.narrativeBlock} aria-labelledby="challenge-heading">
              <h2 id="challenge-heading" className={styles.blockHeading}>
                The Challenge
              </h2>
              <p className={styles.blockText}>{item.challenge}</p>
            </section>

            <section className={styles.narrativeBlock} aria-labelledby="solution-heading">
              <h2 id="solution-heading" className={styles.blockHeading}>
                Our Solution
              </h2>
              <p className={styles.blockText}>{item.solution}</p>
            </section>

            <section className={styles.narrativeBlock} aria-labelledby="impact-heading">
              <h2 id="impact-heading" className={styles.blockHeading}>
                Results &amp; Impact
              </h2>
              <p className={styles.blockText}>{item.impact}</p>
              <div className={styles.impactHighlight}>
                {item.impactHighlight ??
                  'Speed, clarity and accessibility resulted in immediate measurable business gains.'}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className={styles.bottomNav}>
          <Link href="/#work" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to selected work
          </Link>

          <Link href="/#contact" className={styles.ctaPill}>
            Start a project like this
          </Link>
        </div>
      </div>
    </article>
  );
}
