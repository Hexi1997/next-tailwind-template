import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const { t } = useTranslation('common');

  return (
    <div className={cn(styles.Header, className)}>{t('COMMON_LANGUAGE')}</div>
  );
}
