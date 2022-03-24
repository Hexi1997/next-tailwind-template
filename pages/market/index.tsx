import cn from 'classnames';

import { CategoryList } from '@/components';

import styles from './_index.module.scss';

interface marketProps {
  className?: string;
}

const Category1Data = {
  title: 'Category',
  categories: [
    'All',
    'Food',
    'Minted',
    'Stars',
    'Music',
    'Sports',
    'Movies',
    'Art',
    'Photography'
  ]
};
const Category2Data = {
  title: 'Sale Type',
  categories: ['All', 'Listings', 'Minted', 'Sales', 'Bids', 'Transfers']
};

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
    </div>
  );
}

export default Market;
