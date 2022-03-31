import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useCallback, useState } from 'react';

import { Button } from '@/components/Common/Button';

import { ActivityType, ActivityTypeArr } from '../CollectionActivityList';
import styles from './CollectionActivitySelector.module.scss';

interface CollectionActivitySelectorProps {
  className?: string;
}

export function CollectionActivitySelector(
  props: CollectionActivitySelectorProps
) {
  const { className } = props;
  const [activeKey, setActiveKey] = useState(ActivityTypeArr[0]);
  const { t } = useTranslation('collection');

  const getI18NText = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (value: ActivityType): any => {
      switch (value) {
        case 'Transfer':
          return t('COLLECTION_DETAIL_SALE_TYPE_TRANSFERS');
          break;
        case 'List':
          return t('COLLECTION_DETAIL_SALE_TYPE_LISTING');
          break;
        case 'Minted':
          return t('COLLECTION_DETAIL_SALE_TYPE_MINTED');
          break;
        case 'Bids':
          return t('COLLECTION_DETAIL_SALE_TYPE_BIDS');
          break;
        case 'Sale':
          return t('COLLECTION_DETAIL_SALE_TYPE_SALES');
          break;
        case 'All':
          return t('COLLECTION_DETAIL_SALE_TYPE_ALL');
          break;
        default:
          return t('COLLECTION_DETAIL_SALE_TYPE_TRANSFERS');
          break;
      }
    },
    [t]
  );

  return (
    <div
      className={cn(
        styles.CollectionActivitySelector,
        className,
        'mt-[34px] mb-8 flex flex-wrap sm:mb-20'
      )}
    >
      {ActivityTypeArr.map((item) => (
        <Button
          key={item}
          onClick={() => {
            setActiveKey(item);
          }}
          type="Default"
          className={cn(
            'min-w-14 mr-4 mt-2 !rounded-full border-2 border-solid border-gray-100 px-4 py-[10px] text-[14px] hover:!bg-themeGreen hover:!text-white',
            activeKey === item ? 'bg-themeGreen !text-white' : ''
          )}
        >
          {getI18NText(item as ActivityType)}
        </Button>
      ))}
    </div>
  );
}
