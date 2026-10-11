import styles from './Studio.module.css';

const principles = [
  {
    title: 'Fast by default',
    body: 'Hand-coded pages with no page-builder bloat, so they load in well under a second and stay quick on a mid-range phone.',
  },
  {
    title: 'Built for everyone',
    body: 'Readable type, keyboard-friendly navigation and sensible contrast are part of the first draft, not a late patch.',
  },
  {
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
      <div className="container">
        <div className={styles.top}>
          <h2 id="studio-heading" className={styles.heading}>
            Studio
          </h2>
          <p className={styles.intro}>
            Realm.Studio is a small, independent design and development studio. You work directly
            with the person building your site, from the first sketch to the day it goes live.
          </p>
        </div>

        <div className={styles.body}>
          <p className={styles.copy}>
            We make websites, booking systems and automations for restaurants, hospitality brands and
            growing teams who care how their product feels. Every layout is coded from scratch
            instead of assembled from templates, so it loads instantly, respects visitor privacy and
            works for the people who actually use it.
          </p>
          <p className={styles.copy}>
            Staying small is deliberate. There are no handoffs between account managers,
            designers and developers, so decisions are quick and nothing gets lost in translation.
            We take on a limited number of projects at a time and stay around after launch to keep
            things running.
          </p>
        </div>

        <ul className={styles.principles}>
          {principles.map((p) => (
            <li key={p.title} className={styles.principle}>
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </li>
          ))}
        </ul>

        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
