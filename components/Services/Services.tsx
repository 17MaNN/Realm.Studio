import { diwaliOffer, servicesList } from '@/data/services';
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

          <aside className={styles.offer} aria-label="Diwali offer">
            <p className={styles.offerBadge}>
              <span aria-hidden="true">✦</span> {diwaliOffer.label}
            </p>
            <p className={styles.offerAmount}>Flat {inr(diwaliOffer.discount)} off</p>
            <p className={styles.offerCopy}>
              Every service booked before {diwaliOffer.deadline}. Already applied to the prices
              below.
            </p>
            <p className={`hand ${styles.offerNote}`} aria-hidden="true">
              yes, really — see ↓
            </p>
          </aside>
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
                <span className={styles.priceNow}>
                  {inr(service.price - diwaliOffer.discount)}
                </span>
                <span className={styles.priceOld}>
                  from <s>{inr(service.price)}</s>
                </span>
                <span className={styles.priceNote}>
                  Diwali price · save {inr(diwaliOffer.discount)}
                </span>
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
