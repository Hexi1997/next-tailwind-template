import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import searchImg from '@/assets/images/header/search.svg';

import styles from './Search.module.scss';

interface SearchProps {
  className?: string;
}

export function Search(props: SearchProps) {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(styles.Search, 'relative flex-1', className)}>
      <input
        type="text"
        placeholder={t('COMMON_SEARCH_PLACEHOLDER')}
        className="h-9 w-full rounded-full border-2 px-12 text-sm text-stone-500 focus:outline-none"
      />
      <div className="absolute top-2 left-4">
        <Image src={searchImg} className="h-5 w-5" />
      </div>
    </div>
  );
}
