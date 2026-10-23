import { linktree } from '@/data/links';
import styles from './Contact.module.css';

const email = 'hellorealm.studio@gmail.com';
const phones = ['+919259412501', '+919682976837'];

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.compact}>
          <div>
            <h2 id="contact-heading" className={styles.heading}>
              Have something to build?
            </h2>
            <p className={styles.lead}>Tell us what you are making. We reply within a day.</p>
          </div>

          <div className={styles.actions}>
            <a href={`mailto:${email}`} className={styles.ctaButton}>
              Start a project
            </a>
            <a href={`mailto:${email}`} className={styles.emailLink}>
              {email}
            </a>
          </div>
        </div>

        <div className={styles.linktree}>
          <div>
            <p className={styles.linktreeLabel}>All our links</p>
            <a
              href={linktree.url}
              className={styles.linktreeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linktree.label} <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className={styles.quickLinks} aria-label="Quick contact links">
            <li>
              <a href={`mailto:${email}`} className={styles.quickLink}>
                Email
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${phones[0].replace('+', '')}`}
                className={styles.quickLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            {phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className={styles.quickLink}>
                  {phone.replace('+91', '+91 ').replace(/(\d{5})(\d{5})/, '$1 $2')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
