import cn from 'classnames';

import { CategoryList, ItemCard, Option, Select } from '@/components';

import styles from './_index.module.scss';
import { Category1Data, Category2Data, hotBidsData } from './mock';

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
        <Select placeholder="select your preference">
          <Option value={'test1'}>test1</Option>
          <Option value={'test2'}>test2</Option>
          <Option value={'test3'}>test3</Option>
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
