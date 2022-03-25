import cn from 'classnames';

import { CategoryList, ItemCard, Option, Select } from '@/components';

import styles from './_index.module.scss';
import {
  Category1Data,
  Category2Data,
  hotBidsData,
  selectOptions1,
  selectOptions2
} from './mock';

interface marketProps {
  className?: string;
}

function Market(props: marketProps) {
  const { className } = props;

  return (
    <div className={cn(styles.market, className)}>
      <div className={styles.marketTitle}>Explore all collections</div>
      <CategoryList
        title={Category1Data.title}
        categories={Category1Data.categories}
      />
      <CategoryList
        title={Category2Data.title}
        categories={Category2Data.categories}
      />

      <div className={styles.marketSelect}>
        <Select
          style={{ width: '12.5rem', marginRight: '3rem' }}
          placeholder="select your preference"
        >
          {selectOptions1.map((option: string) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
        <Select
          style={{ width: '12.5rem' }}
          placeholder="select your preference"
        >
          {selectOptions2.map((option: string) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>

      <div className={styles.marketList}>
        {hotBidsData.map((item) => (
          <ItemCard className={styles.marketItem} key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Market;
