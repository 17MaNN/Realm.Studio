import NavBar from './NavBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} data-site-header>
      <NavBar />
    </header>
  );
}
