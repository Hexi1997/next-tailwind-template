import { ANCHOR, Drawer } from 'baseui/drawer';
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import { Button } from '@/components';

import styles from './MobileCategoryList.module.scss';
interface MobileCategoryListProps {
  className?: string;
  children?: ReactNode;
  visible: boolean;
  onClose?: () => void;
}

const MobileCategoryList: FC<MobileCategoryListProps> = (props) => {
  const { className, children, visible, onClose } = props;

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
        <div className="text-center text-[1rem] font-[500]">Filter</div>
        {children}
        <Button
          type="None"
          className="absolute bottom-4 left-8 h-[2.25rem] w-[10rem] rounded-[1.125rem] bg-[#666666] text-white"
        >
          Restart
        </Button>
        <Button
          className="absolute bottom-4 right-8 h-[2.25rem] w-[10rem] rounded-[1.125rem]"
          onClick={onClose}
        >
          Finished
        </Button>
      </Drawer>
    </div>
  );
};

export default MobileCategoryList;
