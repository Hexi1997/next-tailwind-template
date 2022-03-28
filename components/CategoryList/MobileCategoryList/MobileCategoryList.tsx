import cn from 'classnames';
import { FC } from 'react';

import styles from './MobileCategoryList.module.scss';

interface MobileCategoryListProps {
  className?: string;
}

const MobileCategoryList: FC<MobileCategoryListProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.MobileCategoryList, className, 'lg:hidden')}>
      MobileCategoryList
    </div>
  );
};

export default MobileCategoryList;
