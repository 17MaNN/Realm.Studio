import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.cardInner}>
          <h2 id="contact-heading" className={styles.heading}>
            Have something to build?
          </h2>

          <div className={styles.ctaRow}>
            <a href="mailto:hellorealm.studio@gmail.com" className={styles.ctaButton}>
              Start a project
            </a>

            <div className={styles.linksGroup}>
              <a href="mailto:hellorealm.studio@gmail.com" className={styles.linkItem}>
                hellorealm.studio@gmail.com
              </a>
              <a href="tel:+919259412501" className={styles.linkItem}>
                +91 92594 12501
              </a>
              <a href="tel:+919682976837" className={styles.linkItem}>
                +91 96829 76837
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
