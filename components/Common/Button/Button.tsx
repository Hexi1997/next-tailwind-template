import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'Primary' | 'Default' | 'Border';
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  shadow?: boolean;
}

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    onClick,
    type = 'Primary',
    shadow = true
  } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        styles.Button,
        type === 'Primary' ? 'bg-themeGreen hover:bg-green-500 text-white' : '',
        type === 'Default' ? 'bg-white hover:bg-gray-50 text-[#333333]' : '',
        type === 'Border'
          ? `bg-white hover:bg-gray-50 text-[#333333] ${styles.ButtonBorder}`
          : '',
        shadow ? 'shadow-lg hover:shadow-xl' : '',
        'flex items-center justify-center hover:font-bold transition-all duration-300 rounded-lg',
        className
      )}
    >
      {children}
    </button>
  );
}
