import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import { Button } from '@/components/Common/Button';
import { collectionSubMenus } from '@/components/Header/Nav';

import styles from './CollectionTypeSelector.module.scss';

interface CollectionTypeSelectorProps {
  className?: string;
}

export function CollectionTypeSelector(props: CollectionTypeSelectorProps) {
  const { className } = props;
  const { t } = useTranslation('menu');
  const router = useRouter();
  const collectionType = useMemo(() => {
    return router.asPath.split('/')[2];
  }, [router.asPath]);

  return (
    <div
      className={cn(styles.CollectionTypeSelector, className, 'flex flex-wrap')}
    >
      {collectionSubMenus.map((item) => (
        <Link href={item.link} key={item.name}>
          <Button
            type="Default"
            className={cn(
              'px-4 border-gray-100 border-2 border-solid py-[10px] !rounded-full text-[14px] mr-4 mt-2 hover:!bg-themeGreen hover:!text-white',
              item.link.replace('/collections/', '') === collectionType
                ? '!bg-themeGreen !text-white'
                : ''
            )}
          >
            {t(item.name)}
          </Button>
        </Link>
      ))}
    </div>
  );
}
