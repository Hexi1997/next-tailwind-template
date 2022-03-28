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
    <div className={cn(className, 'mb-[25px] flex items-center')}>
      {title && (
        <div className="mr-[27px] pr-6 w-25 border-r-[1px] border-solid border-neutral-300 text-[1rem] text-[#666666] whitespace-nowrap">
          {title}
        </div>
      )}
      <div className="flex flex-wrap">
        {categories.map((item) => (
          <Button
            key={item}
            className="mr-5 py-4 px-2.5 h-9 rounded-[18px]"
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
