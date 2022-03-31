import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useState } from 'react';
import { useWindowSize } from 'react-use';

import { ItemCard, Select } from '@/components';
import { Search } from '@/components/Common/Search';

import { ItemsData } from '../../Home/SectionHotBids';
import styles from './CollectionDetailItems.module.scss';

interface CollectionDetailItemsProps {
  className?: string;
}
const addTimeOptions = [
  {
    label: 'Add Time Newest',
    id: 1
  },
  {
    label: 'Add Time Oldest',
    id: 2
  }
];

export function CollectionDetailItems(props: CollectionDetailItemsProps) {
  const { className } = props;
  const [searchStr, setSearchStr] = useState('');
  const { t } = useTranslation('collection');
  const { width } = useWindowSize();

  const saleTypeOptions = useMemo(() => {
    return [
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_ALL'),
        id: 1
      },
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_LISTING'),
        id: 2
      },
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_MINTED'),
        id: 3
      },
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_SALES'),
        id: 4
      },
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_BIDS'),
        id: 5
      },
      {
        label: t('COLLECTION_DETAIL_SALE_TYPE_TRANSFERS'),
        id: 6
      }
    ];
  }, [t]);

  const addTimeOptions = useMemo(() => {
    return [
      {
        label: t('COLLECTION_DETAIL_ADD_TIME_NEW'),
        id: 1
      },
      {
        label: t('COLLECTION_DETAIL_ADD_TIME_OLD'),
        id: 2
      }
    ];
  }, [t]);
  return (
    <div
      className={cn(styles.CollectionDetailItems, className, 'mt-6 sm:mt-10')}
    >
      <div className="mb-8 flex flex-col items-center justify-between lg:flex-row">
        <Search
          className="mx-2 w-full max-w-[300px] lg:w-[300px]"
          placeholder={t('COLLECTION_DETAIL_SEARCH_PLACEHOLDER')}
          cb={(value: string) => {
            setSearchStr(value);
          }}
        />
        <div className="mr-0 mt-4 flex items-center justify-center lg:mr-2 lg:mt-0">
          <Select
            placeholder={t('COLLECTION_DETAIL_SALE_TYPE')}
            style={{
              width: width < 1080 ? '150px' : '200px',
              height: '36px',
              marginRight: width < 1080 ? '20px' : '51px'
            }}
            options={saleTypeOptions}
          />
          <Select
            placeholder={t('COLLECTION_DETAIL_ADD_TIME')}
            style={{
              width: width < 1080 ? '150px' : '200px',
              height: '36px'
            }}
            options={addTimeOptions}
          />
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
        {ItemsData.map((item, index) => (
          <ItemCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
