import { workList } from '@/data/work';
import CaseItem from '@/components/CaseItem';
import styles from './WorkList.module.css';

export default function WorkList() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className="container">
        <h2 id="work-heading" className={styles.heading}>
          Selected work
        </h2>

        <div className={styles.list}>
          {workList.map((item, index) => (
            <CaseItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
