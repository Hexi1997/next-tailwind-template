import cn from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Button } from '@/components';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './CategoryList.module.scss';

type CategoryItem = {
  title?: string;
  categories: Array<{
    icon?: string;
    label: string;
  }>;
};
interface CategoryListProps {
  className?: string;
  category: CategoryItem;
  value: string | number;
  onSelected?: (item: string) => void;
}

// 多于5个就一行3个，否则一行2个
const CategoryList: FC<CategoryListProps> = (props) => {
  const { className, category, value = null, onSelected } = props;

  const [selected, setSelected] = useState(value);

  useEffect(() => {
    console.log('select changed', selected);
  }, [selected]);

  const handleSelected = (item: string) => {
    onSelected && onSelected(item);
    setSelected(item);
  };

  const { IconFont } = useIconFont();
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  return (
    <div
      className={cn(
        styles.CategoryList,
        className,
        'mb-4',
        'lg:mb-[25px] lg:flex lg:items-center'
      )}
    >
      {category.title && (
        <div
          className={cn(
            'whitespace-nowrap text-base text-[#666666]',
            isMobile && 'mb-4',
            'lg:mr-[27px] lg:w-[100px] lg:border-r-[1px] lg:border-solid lg:border-neutral-300 lg:pr-6'
          )}
        >
          {category.title}
        </div>
      )}
      <div
        className={cn(
          'grid gap-y-4 gap-x-4',
          'lg:flex lg:flex-wrap',
          category.categories.length > 4
            ? 'grid-cols-3 grid-rows-1'
            : 'grid-cols-2 grid-rows-2'
        )}
      >
        {category.categories.map((item, index) => (
          <Button
            key={item.label}
            className={cn(
              'h-[28px] rounded-[14px]',
              isMobile && 'w-full md:w-3/4',
              category.categories.length < 5
                ? index % 2
                  ? 'justify-self-end'
                  : 'justify-self-start'
                : '',
              category.categories.length > 4 && index % 3 === 1
                ? 'justify-self-center'
                : '',
              category.categories.length > 4 && index % 3 === 2
                ? 'justify-self-end'
                : '',
              'lg:mr-5 lg:h-[36px] lg:rounded-[18px] lg:px-4 lg:py-2.5'
            )}
            type={item.label === selected ? 'Primary' : 'Border'}
            shadow={false}
            transition={false}
            onClick={() => handleSelected(item.label)}
          >
            {item.label}
            {item.icon && (
              <IconFont className={cn('pl-1', 'md:pl-2')} type={item.icon} />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

CategoryList.defaultProps = {};

export default CategoryList;
