import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import hotBidsImg2 from '@/assets/images/home/hot_bids_3.png';
import hotBidsImg3 from '@/assets/images/home/hot_bids_4.png';
import hotBidsImg4 from '@/assets/images/home/hot_bids_5.png';
import hotBidsImg5 from '@/assets/images/home/hot_bids_6.png';
import userIconImg from '@/assets/images/home/usericon2.png';
import {
  Button,
  CategoryList,
  ItemCard,
  MobileCategoryList,
  Select
} from '@/components';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './_index.module.scss';

const hotBidsData = [
  {
    id: 1,
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）Long name long name',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 16,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    id: 2,
    img: hotBidsImg2,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 26,
    isLikeByYou: false,
    price: '1.00 FLOW'
  },
  {
    id: 3,
    img: hotBidsImg3,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 0,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    id: 4,
    img: hotBidsImg4,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 1000,
    isLikeByYou: true,
    price: '10000.00 FLOW'
  },
  {
    id: 5,
    img: hotBidsImg5,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 120,
    isLikeByYou: true,
    price: '10.00 FLOW'
  },
  {
    id: 6,
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 3,
    isLikeByYou: false,
    price: '2.00 FLOW'
  }
];

interface marketProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'market',
        'category',
        'selection'
      ]))
    }
  };
}

function Market(props: marketProps) {
  const { className } = props;
  const { t } = useTranslation(['market', 'category', 'selection']);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState(
    t('CATEGORY_TAG_ALL', { ns: 'category' }) as unknown as string
  );
  const [saleType, setSaleType] = useState(
    t('CATEGORY_TAG_ALL', { ns: 'category' }) as unknown as string
  );

  const Category1 = {
    title: t('CATEGORY_TITLE_CATEGORY', { ns: 'category' }),
    categories: [
      { label: t('CATEGORY_TAG_ALL', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_FOOD', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_MINTED', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_STARS', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_MUSIC', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_SPORTS', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_MOVIES', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_ART', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_PHOTOGRAPHY', { ns: 'category' }) }
    ]
  };
  const Category2 = {
    title: t('CATEGORY_TITLE_SALE_TYPE', { ns: 'category' }),
    categories: [
      { label: t('CATEGORY_TAG_ALL', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_LISTINGS', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_MINTED', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_SALES', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_BIDS', { ns: 'category' }) },
      { label: t('CATEGORY_TAG_TRANSFERS', { ns: 'category' }) }
    ]
  };
  const Category3Data = {
    title: t('CATEGORY_TITLE_SORT', { ns: 'category' }),
    categories: [
      {
        label: t('CATEGORY_TAG_PRICE_DESC', { ns: 'category' }),
        icon: 'icon-sort-asc'
      },
      {
        label: t('CATEGORY_TAG_PRICE_ASC', { ns: 'category' }),
        icon: 'icon-sort-desc'
      },
      { label: t('CATEGORY_TAG_RECENTLY_LISTED', { ns: 'category' }) }
    ]
  };
  const selectOptions1 = [
    {
      label: t('SELECT_OPTION_PRICE_HIGHEST', { ns: 'selection' }),
      id: 1
    },
    {
      label: t('SELECT_OPTION_PRICE_LOWEST', { ns: 'selection' }),
      id: 2
    },
    {
      label: t('SELECT_OPTION_TIME_NEWEST', { ns: 'selection' }),
      id: 3
    }
  ];
  const selectOptions2 = [
    {
      label: t('SELECT_OPTION_ADD_TIME_NEWEST', { ns: 'selection' }),
      id: 1
    },
    {
      label: t('SELECT_OPTION_ADD_TIME_OLDEST', { ns: 'selection' }),
      id: 2
    }
  ];

  const toggleFilter = (visible: boolean) => {
    setShowFilter(visible);
  };

  const { IconFont } = useIconFont();

  return (
    <>
      <NextSeo
        title={t('MARKET_PAGE_SEO_TITLE', { ns: 'market' })}
        description={t('MARKET_PAGE_SEO_DESC', { ns: 'market' })}
      />
      <div className={cn(styles.market, className, 'container')}>
        <div className="my-10 text-[28px] font-bold">
          {t('MARKET_TITLE', { ns: 'market' })}
        </div>
        <CategoryList
          className="hidden"
          title={Category1.title}
          categories={Category1.categories}
          value={category}
          onSelected={setCategory}
        />
        <CategoryList
          className="hidden"
          title={Category2.title}
          categories={Category2.categories}
          value={saleType}
          onSelected={setSaleType}
        />

        <div className={cn('mb-10 hidden', 'lg:flex')}>
          <Select
            style={{ width: '200px', marginRight: '36px' }}
            options={selectOptions1}
          />
          <Select style={{ width: '200px' }} options={selectOptions2} />
        </div>

        <Button
          className={cn(
            'font-[14px] fixed bottom-9 right-5 z-10 h-[40px] w-[110px] rounded-[23px] bg-[#333333]',
            'lg:hidden'
          )}
          onClick={() => toggleFilter(true)}
        >
          {t('SELECT_MOBILE_FILTER', { ns: 'selection' })}
          <IconFont
            className="h-[24px] w-[16px] text-[28px]"
            type="icon-filter"
          />
        </Button>
        <MobileCategoryList
          visible={showFilter}
          onClose={() => toggleFilter(false)}
        >
          <CategoryList
            title={Category1.title}
            categories={Category1.categories}
            isMobile={true}
            value={category}
            onSelected={setCategory}
          />
          <CategoryList
            title={Category2.title}
            categories={Category2.categories}
            isMobile={true}
            value={saleType}
            onSelected={setSaleType}
          />
          <CategoryList
            title={Category3Data.title}
            categories={Category3Data.categories}
            isMobile={true}
            value={''}
          />
        </MobileCategoryList>

        <div className="mb-[115px] grid grid-cols-1 grid-rows-3 gap-x-44 gap-y-8 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-44">
          {hotBidsData.map((item) => (
            <ItemCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Market;
