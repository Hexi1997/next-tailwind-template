import cn from 'classnames';
import { useState } from 'react';

import { Button } from '@/components';

import styles from './CategoryList.module.scss';

interface CategoryListProps {
  className?: string;
  title?: string;
  categories: string[];
  onSelected?: (item: string) => void;
}

export function CategoryList(props: CategoryListProps) {
  const { className, title, categories, onSelected } = props;

  const [selected, setSelected] = useState(categories[0]);

  const handleSelected = (item: string) => {
    onSelected && onSelected(item);
    setSelected(item);
  };

  return (
    <div className={cn(styles.CategoryList, className)}>
      {title && <div className={styles.CategoryTitle}>{title}</div>}
      {categories.map((item) => (
        <Button
          key={item}
          className={styles.CategoryItem}
          type={item === selected ? 'Primary' : 'Border'}
          shadow={false}
          onClick={() => handleSelected(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
