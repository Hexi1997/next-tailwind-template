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

// 多于5个就一行3个，否则一行2个
export function CategoryList(props: CategoryListProps) {
  const { className, title, categories, onSelected } = props;

  const [selected, setSelected] = useState(categories[0]);

  const handleSelected = (item: string) => {
    onSelected && onSelected(item);
    setSelected(item);
  };

  return (
    <div
      className={cn(
        styles.CategoryList,
        className,
        'mb-4',
        'lg:mb-[25px] lg:flex lg:items-center'
      )}
    >
      {title && (
        <div
          className={cn(
            'whitespace-nowrap text-[1rem] text-[#666666]',
            'mb-4',
            'lg:w-25 lg:mr-[27px] lg:border-r-[1px] lg:border-solid lg:border-neutral-300 lg:pr-6'
          )}
        >
          {title}
        </div>
      )}
      <div
        className={cn(
          'grid gap-y-4 gap-x-4',
          categories.length > 4
            ? 'grid-cols-3 grid-rows-1'
            : 'grid-cols-2 grid-rows-2',
          'lg:flex lg:flex-wrap'
        )}
      >
        {categories.map((item, index) => (
          <Button
            key={item}
            className={cn(
              'rounded-6 h-7 w-3/4',
              categories.length < 5
                ? index % 2
                  ? 'justify-self-end'
                  : 'justify-self-start'
                : '',
              categories.length > 4 && index % 3 === 1
                ? 'justify-self-center'
                : '',
              categories.length > 4 && index % 3 === 2
                ? 'justify-self-end'
                : '',
              'lg:mr-5 lg:h-9 lg:rounded-[1.125rem] lg:py-4 lg:px-2.5'
            )}
            type={item === selected ? 'Primary' : 'Border'}
            shadow={false}
            onClick={() => handleSelected(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}
