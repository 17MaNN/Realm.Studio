import NavBar from './NavBar';
import LogoWordmark from './LogoWordmark';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <NavBar />
      <LogoWordmark className={`${styles.logo} ${styles.glass}`} />
    </header>
  );
}
