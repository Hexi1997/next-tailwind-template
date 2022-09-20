import cn from 'classnames';
import { ReactChild } from 'react';

import { Header } from '../Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  className?: string;
  children: ReactChild;
}

export function Layout(props: LayoutProps) {
  const { className, children } = props;

  return (
    <div className={cn(styles.Layout, className)}>
      <Header />
      {children}
    </div>
  );
}
