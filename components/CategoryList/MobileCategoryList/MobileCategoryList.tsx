import { ANCHOR, Drawer } from 'baseui/drawer';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';

import { Button, CategoryList } from '@/components';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './MobileCategoryList.module.scss';

type CategoryItem = {
  title: string;
  categories: Array<{
    icon?: string;
    label: string;
  }>;
};
interface MobileCategoryListProps {
  className?: string;
  visible: boolean;
  categories: CategoryItem[];
  values: Array<string | number>;
  toggleVisible: (visible: boolean) => void;
  onSelected?: Array<(item: string) => void>;
}

const MobileCategoryList: FC<MobileCategoryListProps> = (props) => {
  const { className, visible, toggleVisible, categories, values, onSelected } =
    props;
  const { t } = useTranslation('selection');
  const { IconFont } = useIconFont();

  const handleReset = () => {
    onSelected &&
      onSelected.forEach((onReset, index) => {
        onReset(categories[index].categories[0].label);
      });
    toggleVisible(false);
  };

  return (
    <div className={cn(styles.MobileCategoryList, className)}>
      {!visible && (
        <Button
          className={cn(
            'fixed bottom-9 right-5 z-10 h-10 w-[110px] rounded-[23px] bg-[#333333] text-sm',
            'lg:hidden'
          )}
          onClick={() => toggleVisible(true)}
        >
          {t('SELECT_MOBILE_FILTER')}
          <IconFont className="h-6 w-4 text-[28px]" type="icon-filter" />
        </Button>
      )}
      <Drawer
        isOpen={visible}
        onClose={() => toggleVisible(false)}
        anchor={ANCHOR.bottom}
        overrides={{
          DrawerContainer: {
            style: () => ({
              borderRadius: '1rem 1rem 0 0',
              padding: '1rem 2rem'
            })
          },
          DrawerBody: {
            style: () => ({
              margin: 0,
              paddingBottom: '3rem'
            })
          }
        }}
      >
        <div className="text-center text-[1rem] font-[500]">
          {t('SELECT_MOBILE_FILTER')}
        </div>
        {categories.map((item, index) => (
          <CategoryList
            key={item.title}
            category={item}
            value={values[index]}
            onSelected={onSelected && onSelected[index]}
          />
        ))}
        <Button
          type="None"
          className={cn(
            'absolute bottom-2 left-8 h-9 w-[128px] rounded-[18px] bg-[#666666] text-white',
            'md:w-40'
          )}
          onClick={handleReset}
        >
          {t('SELECT_MOBILE_RESTART')}
        </Button>
        <Button
          className={cn(
            'absolute bottom-2 right-8 h-9 w-[128px] rounded-[18px]',
            'md:w-40'
          )}
          onClick={() => toggleVisible(false)}
        >
          {t('SELECT_MOBILE_FINISH')}
        </Button>
      </Drawer>
    </div>
  );
};

export default MobileCategoryList;
