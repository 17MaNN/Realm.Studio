import { servicesList } from '@/data/services';
import { Underline } from '@/components/Doodles/Doodles';
import styles from './Services.module.css';

const inr = (value: number) => `₹${value.toLocaleString('en-IN')}`;

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Services &amp; pricing</p>
            <h2 id="services-heading" className={styles.heading}>
              What we{' '}
              <span className={styles.underlined}>
                do
                <Underline className={styles.underline} />
              </span>
            </h2>
            <p className={`hand ${styles.handNote}`}>pick one, or stitch them together</p>
          </div>
        </div>

        <ul className={styles.list}>
          {servicesList.map((service) => (
            <li key={service.id} className={styles.item}>
              <div className={styles.nameCol}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.subtitle}>{service.subtitle}</p>
              </div>

              <p className={styles.description}>{service.description}</p>

              <div className={styles.priceCol}>
                <span className={styles.priceNow}>{inr(service.price)}</span>
                <span className={styles.priceLabel}>starting from</span>
                <a
                  href="#contact"
                  className={styles.priceCta}
                  aria-label={`Book your first website — ${service.title}`}
                >
                  Book your first website
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>
          Starting prices in INR, excluding GST. Final quote depends on scope and timeline.
        </p>
      </div>
    </section>
  );
}
