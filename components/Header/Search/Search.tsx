import { CloseOutlined } from '@ant-design/icons';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

import searchImg from '@/assets/images/header/search.svg';
import collectionResult1Img from '@/assets/images/home/collectionSearchResult1.png';
import collectionResult2Img from '@/assets/images/home/collectionSearchResult2.png';
import collectionResult3Img from '@/assets/images/home/collectionSearchResult3.png';
import itemResult1Img from '@/assets/images/home/itemSearchResult1.png';
import itemResult2Img from '@/assets/images/home/itemSearchResult2.png';
import itemResult3Img from '@/assets/images/home/itemSearchResult3.png';
import userResult1Img from '@/assets/images/home/userSearchResult1.png';
import userResult2Img from '@/assets/images/home/userSearchResult2.png';
import userResult3Img from '@/assets/images/home/userSearchResult3.png';
import { Button } from '@/components/Common/Button';

import styles from './Search.module.scss';
import { SearchResultLine } from './SearchResultLine';

interface SearchProps {
  className?: string;
  cb?: () => void;
}

export interface ISearchResultLine {
  name: string;
  link: string;
  img: StaticImageData;
}

interface ISearchResult {
  collections?: ISearchResultLine[];
  items?: ISearchResultLine[];
  users?: ISearchResultLine[];
}

const mockSearchResult: ISearchResult = {
  collections: [
    {
      name: 'Matrix World Voucher Matrix World Voucher Matrix World Voucher Matrix World Voucher Matrix World Voucher',
      link: '/collection/1',
      img: collectionResult1Img
    },
    {
      name: 'Heart & Sol',
      link: '/collection/1',
      img: collectionResult2Img
    },
    {
      name: 'Invisible friends',
      link: '/collection/1',
      img: collectionResult3Img
    }
  ],
  items: [
    {
      name: 'Yzeo',
      link: '/collection/1/1',
      img: itemResult1Img
    },
    {
      name: 'The Yough',
      link: '/collection/1',
      img: itemResult2Img
    },
    {
      name: 'Runners',
      link: '/collection/1/1',
      img: itemResult3Img
    }
  ],
  users: [
    {
      name: 'Satoiu',
      link: '/users/1',
      img: userResult1Img
    },
    {
      name: 'Digi',
      link: '/users/1',
      img: userResult2Img
    },
    {
      name: 'S&M Banana Watermelon',
      link: '/users/1',
      img: userResult3Img
    }
  ]
};

export function Search(props: SearchProps) {
  const { className, cb } = props;
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [isShowResult, setIsShowResult] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsShowResult(!!value);
  }, [value]);

  useClickAway(ref, () => {
    setIsShowResult(false);
  });

  return (
    <div ref={ref} className={cn(styles.Search, 'relative flex-1', className)}>
      <input
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            console.log('点击了enter');
          }
        }}
        onFocus={() => {
          if (value) {
            setIsShowResult(true);
          }
        }}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value.trim());
        }}
        placeholder={t('COMMON_SEARCH_PLACEHOLDER')}
        className="h-9 w-full rounded-full border-2 px-12 text-sm text-stone-500 focus:outline-none"
      />
      <div className="absolute top-2 left-4">
        <Image src={searchImg} className="h-5 w-5" />
      </div>
      {isShowResult && (
        <>
          <div
            className="absolute top-1 right-0 cursor-pointer p-4 pt-0"
            onClick={() => {
              setValue('');
            }}
          >
            <CloseOutlined className="text-gray-400" />
          </div>
          <div
            className="absolute top-[36px] left-0 z-30 h-[300px] w-full overflow-auto rounded-xl border-[2px] !border-t-0 border-solid border-gray-200 bg-white px-5 py-6 shadow-lg lg:h-[500px] xl:h-auto"
            onClick={() => {
              setIsShowResult(false);
              cb && cb();
            }}
          >
            {mockSearchResult.collections?.length && (
              <SearchResultLine
                data={mockSearchResult.collections}
                title={t('COMMON_SEARCH_RESULT_COLLECTIONS_TITLE')}
              />
            )}
            {mockSearchResult.items?.length && (
              <SearchResultLine
                data={mockSearchResult.items}
                title={t('COMMON_SEARCH_RESULT_ITEMS_TITLE')}
              />
            )}
            {mockSearchResult.users?.length && (
              <SearchResultLine
                data={mockSearchResult.users}
                title={t('COMMON_SEARCH_RESULT_USERS_TITLE')}
              />
            )}
            <Link href={`/result?query=${value}`}>
              <Button type="Primary" className="w-full !rounded-full py-[10px]">
                {t('COMMON_SEARCH_CHECK_ALL_RESULTS')}
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
