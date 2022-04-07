import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { ReactNode } from 'react';

import { CollectionTypeSelector } from '../CollectionTypeSelector';
import styles from './CollectionsLayout.module.scss';

interface CollectionsLayoutProps {
  className?: string;
  children: ReactNode;
}

export function CollectionsLayout(props: CollectionsLayoutProps) {
  const { className, children } = props;
  const { t } = useTranslation('collections');

  return (
    <div className={cn(styles.CollectionsLayout, className)}>
      <h1 className="mt-8 mb-2 text-[28px] font-bold text-[#333333] sm:mb-4 lg:mb-6 xl:mb-6">
        {t('COLLECTIONS_PAGE_TITLE')}
      </h1>
      <CollectionTypeSelector className="mb-6 sm:mb-12" />
      {children}
    </div>
  );
}
