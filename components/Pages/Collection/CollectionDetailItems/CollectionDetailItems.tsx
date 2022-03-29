import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
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
// 'All', 'Listings', 'Minted', 'Sales', 'Bids', 'Transfers'
const saleTypeOptions = [
  {
    label: 'All',
    id: 1
  },
  {
    label: 'Listings',
    id: 2
  },
  {
    label: 'Minted',
    id: 3
  },
  {
    label: 'Sales',
    id: 4
  },
  {
    label: 'Bids',
    id: 5
  },
  {
    label: 'Transfers',
    id: 6
  }
];

export function CollectionDetailItems(props: CollectionDetailItemsProps) {
  const { className } = props;
  const [searchStr, setSearchStr] = useState('');
  const { t } = useTranslation('collection');
  const { width } = useWindowSize();

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
            style={{
              width: width < 1080 ? '150px' : '200px',
              height: '36px',
              marginRight: width < 1080 ? '20px' : '51px'
            }}
            options={saleTypeOptions}
          />
          <Select
            style={{
              width: width < 1080 ? '150px' : '200px',
              height: '36px'
            }}
            options={addTimeOptions}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
        {ItemsData.map((item, index) => (
          <ItemCard data={item} key={index} className="lg:!mx-0" />
        ))}
      </div>
    </div>
  );
}
