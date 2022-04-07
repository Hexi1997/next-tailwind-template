import { ANCHOR, Drawer } from 'baseui/drawer';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { FC, ReactNode } from 'react';

import { Button } from '@/components';

import styles from './MobileCategoryList.module.scss';
interface MobileCategoryListProps {
  className?: string;
  children?: ReactNode;
  visible: boolean;
  onClose?: () => void;
  onReset?: () => void;
}

const MobileCategoryList: FC<MobileCategoryListProps> = (props) => {
  const { className, children, visible, onClose, onReset } = props;
  const { t } = useTranslation('selection');

  return (
    <div className={cn(styles.MobileCategoryList, className)}>
      <Drawer
        isOpen={visible}
        onClose={onClose}
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
              margin: 0
            })
          }
        }}
      >
        <div className="text-center text-[1rem] font-[500]">
          {t('SELECT_MOBILE_FILTER')}
        </div>
        {children}
        <Button
          type="None"
          className={cn(
            'absolute bottom-4 left-8 h-[2.25rem] w-[8rem] rounded-[1.125rem] bg-[#666666] text-white',
            'md:w-[10rem]'
          )}
          onClick={() => onReset && onReset()}
        >
          {t('SELECT_MOBILE_RESTART')}
        </Button>
        <Button
          className={cn(
            'absolute bottom-4 right-8 h-[2.25rem] w-[8rem] rounded-[1.125rem]',
            'md:w-[10rem]'
          )}
          onClick={() => onClose && onClose()}
        >
          {t('SELECT_MOBILE_FINISH')}
        </Button>
      </Drawer>
    </div>
  );
};

export default MobileCategoryList;
