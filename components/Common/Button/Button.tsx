import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'Primary' | 'Default' | 'Border' | 'Address';
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
        type === 'Primary' ? 'bg-themeGreen text-white hover:bg-green-500' : '',
        type === 'Default' ? 'bg-white text-[#333333] hover:bg-gray-50' : '',
        type === 'Address' ? 'bg-[#ADD976] text-white hover:bg-[#acdf6e]' : '',
        type === 'Border'
          ? `bg-white text-[#333333] hover:bg-gray-50 ${styles.ButtonBorder}`
          : '',
        shadow ? 'shadow-lg hover:shadow-xl' : '',
        'flex items-center justify-center rounded-lg transition-all duration-300 hover:font-bold',
        className
      )}
    >
      {children}
    </button>
  );
}
