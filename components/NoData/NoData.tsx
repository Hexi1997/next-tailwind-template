import cn from 'classnames';
import Image from 'next/image';
import { ReactNode } from 'react';

import styles from './NoData.module.scss';

interface NoDataProps {
  className?: string;
  icon?: StaticImageData;
  title: ReactNode;
  desc?: ReactNode;
}

export function NoData(props: NoDataProps) {
  const { className, icon, title, desc } = props;

  return (
    <div
      className={cn(
        styles.NoData,
        className,
        'flex flex-col items-center justify-center space-y-5'
      )}
    >
      {icon && <Image src={icon} width={20} height={20} />}
      {title && <span className="font-medium text-[#333333]">{title}</span>}
      {desc && <span className="text-sm text-[#999999]">{desc}</span>}
    </div>
  );
}
