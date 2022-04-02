import cn from 'classnames';
import Image from 'next/image';

import circleImg from '@/assets/images/create/circle.svg';

import styles from './FormTitle.module.scss';

interface FormTitleProps {
  className?: string;
  title: string;
}

export function FormTitle(props: FormTitleProps) {
  const { className, title } = props;

  return (
    <div
      className={cn(styles.FormTitle, className, 'flex items-center space-x-2')}
    >
      <Image src={circleImg} width={18} height={18} />
      <span className="text-[28px] font-medium text-[#333333]">{title}</span>
    </div>
  );
}
