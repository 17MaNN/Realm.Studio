import Image from 'next/image';
import styles from './Studio.module.css';

const references = [
  {
    src: '/images/studio/reference-type.jpg',
    alt: 'Overhead view of a design desk with printed wireframes, type specimens and a phone prototype',
    index: '01',
    caption: 'Type, grid, prototype',
    size: 'Wide',
  },
  {
    src: '/images/studio/reference-room.jpg',
    alt: 'Dark, low-lit restaurant dining room with warm brass screens and leather seating',
    index: '02',
    caption: 'Room and mood',
    size: 'Tall',
  },
  {
    src: '/images/studio/reference-studio.jpg',
    alt: 'Bright studio lounge with pale plywood walls, soft chairs and a tall black floor lamp',
    index: '03',
    caption: 'Light and space',
    size: 'Tall',
  },
];

const principles = [
  {
    index: '01',
    title: 'Fast by default',
    body: 'Hand-coded pages with no page-builder bloat, so they load in well under a second and stay quick on a mid-range phone.',
  },
  {
    index: '02',
    title: 'Built for everyone',
    body: 'Readable type, keyboard-friendly navigation and sensible contrast are part of the first draft, not a late patch.',
  },
  {
    index: '03',
    title: 'Made to run itself',
    body: 'Booking systems, automations and dashboards that take repetitive work off your team after launch.',
  },
];

const stats = [
  { value: '3+', label: 'Years' },
  { value: '10+', label: 'Projects' },
  { value: '100%', label: 'Hand-coded' },
];

export default function Studio() {
  return (
    <section id="studio" className={styles.section} aria-labelledby="studio-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.lead}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Studio · Dehradun, India
          </p>

          <h2 id="studio-heading" className={styles.heading}>
            Small by design.
            <br />
            <span className={styles.headingAccent}>Direct by default.</span>
          </h2>

          <p className={styles.intro}>
            You work directly with the person designing and building your site — from the first
            sketch to launch, and long after.
          </p>

          <p className={styles.body}>
            We make websites, booking systems and automations for restaurants, hospitality brands
            and growing teams who care how their product feels. Every layout is coded from scratch
            instead of assembled from templates. Staying small is deliberate: no handoffs, quick
            decisions, and a limited number of projects at a time.
          </p>

          <ul className={styles.stats} aria-label="Studio facts">
            {stats.map((stat) => (
              <li key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>

          <p className={`hand ${styles.handNote}`}>one at a time, start to finish</p>
        </div>

        <div className={styles.board} role="group" aria-label="Reference board">
          {references.map((ref) => (
            <figure
              key={ref.src}
              className={`${styles.ref} ${
                ref.size === 'Wide' ? styles.refWide : styles.refTall
              }`}
            >
              <div className={styles.frame}>
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 45vw, 26vw"
                  className={styles.shot}
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.refIndex}>{ref.index}</span>
                {ref.caption}
              </figcaption>
            </figure>
          ))}

          <p className={styles.note}>pinned by hand — type, rooms, light</p>
        </div>
      </div>

      <div className="container">
        <p className={styles.principlesLabel}>How we work</p>

        <ul className={styles.principles}>
          {principles.map((principle) => (
            <li key={principle.title} className={styles.principle}>
              <span className={styles.principleIndex} aria-hidden="true">
                {principle.index}
              </span>
              <div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleBody}>{principle.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
