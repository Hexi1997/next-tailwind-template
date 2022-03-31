import cn from 'classnames';
import { FC, useState } from 'react';

import { Button } from '@/components';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './CategoryList.module.scss';

type CategoryItem = {
  icon?: string;
  label: string;
};
interface CategoryListProps {
  className?: string;
  title?: string;
  categories: CategoryItem[];
  value: string | number;
  onSelected?: (item: string) => void;
  isMobile?: boolean; // 是否移动端
}

// 多于5个就一行3个，否则一行2个
const CategoryList: FC<CategoryListProps> = (props) => {
  const {
    className,
    title,
    categories,
    value = null,
    isMobile,
    onSelected
  } = props;

  const [selected, setSelected] = useState(value);

  const handleSelected = (item: string) => {
    onSelected && onSelected(item);
    setSelected(item);
  };

  const { IconFont } = useIconFont();

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
            'whitespace-nowrap text-[16px] text-[#666666]',
            isMobile && 'mb-[16px]',
            'lg:mr-[27px] lg:w-[100px] lg:border-r-[1px] lg:border-solid lg:border-neutral-300 lg:pr-6'
          )}
        >
          {title}
        </div>
      )}
      <div
        className={cn(
          'grid gap-y-4 gap-x-4',
          'lg:flex lg:flex-wrap',
          categories.length > 4
            ? 'grid-cols-3 grid-rows-1'
            : 'grid-cols-2 grid-rows-2'
        )}
      >
        {categories.map((item, index) => (
          <Button
            key={item.label}
            className={cn(
              'h-[28px] rounded-[14px]',
              isMobile && 'w-full md:w-3/4',
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
              'lg:mr-5 lg:h-[36px] lg:rounded-[18px] lg:py-4 lg:px-2.5'
            )}
            type={item.label === selected ? 'Primary' : 'Border'}
            shadow={false}
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
