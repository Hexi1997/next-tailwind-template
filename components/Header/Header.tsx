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
    <div className={cn(styles.Header, className)}>
      <div>
        <span>language: </span>
        {t('COMMON_LANGUAGE')}
      </div>
      <div>
        <span>env: </span>
        {process.env.NEXT_PUBLIC_ENV_NAME}
      </div>
    </div>
  );
}
