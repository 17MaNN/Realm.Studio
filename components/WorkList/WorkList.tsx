import { workList } from '@/data/work';
import CaseItem from '@/components/CaseItem';
import { Underline } from '@/components/Doodles/Doodles';
import styles from './WorkList.module.css';

export default function WorkList() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className="container">
        <div className={styles.headingRow}>
          <h2 id="work-heading" className={styles.heading}>
            Selected{' '}
            <span className={styles.underlined}>
              work
              <Underline className={styles.underline} />
            </span>
          </h2>

          <p className={`hand ${styles.headingNote}`}>({workList.length}, for now)</p>
        </div>

        <div className={styles.list}>
          {workList.map((item, index) => (
            <CaseItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
