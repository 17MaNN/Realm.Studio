import { servicesList } from '@/data/services';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className="container">
        <h2 id="services-heading" className={styles.heading}>
          What we do
        </h2>

        <ul className={styles.list}>
          {servicesList.map((service) => (
            <li key={service.id} className={styles.item}>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
