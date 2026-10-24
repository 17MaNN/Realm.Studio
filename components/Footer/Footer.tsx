import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          <p>© 2026 Realm.Studio. All rights reserved.</p>

          <p className={`hand ${styles.signature}`}>drawn and coded by hand, in Dehradun</p>

          <p>Dehradun, India</p>
        </div>
      </div>
    </footer>
  );
}
