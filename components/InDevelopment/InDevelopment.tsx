import { inDevelopmentList } from '@/data/inDevelopment';
import InDevelopmentStrip from './InDevelopmentStrip';
import styles from './InDevelopment.module.css';

export default function InDevelopment() {
  return (
    <section
      id="in-development"
      className={styles.section}
      aria-labelledby="in-development-heading"
    >
      <div className="container">
        <InDevelopmentStrip items={inDevelopmentList} />
      </div>
    </section>
  );
}
