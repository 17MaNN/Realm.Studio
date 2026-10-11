import Link from 'next/link';
import NavBar from './NavBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <NavBar />
      <Link href="/" className={`${styles.logo} ${styles.glass}`} aria-label="Realm.Studio homepage">
        Realm.Studio
      </Link>
    </header>
  );
}
