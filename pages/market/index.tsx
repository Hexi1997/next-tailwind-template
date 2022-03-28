import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import hotBidsImg2 from '@/assets/images/home/hot_bids_3.png';
import hotBidsImg3 from '@/assets/images/home/hot_bids_4.png';
import hotBidsImg4 from '@/assets/images/home/hot_bids_5.png';
import hotBidsImg5 from '@/assets/images/home/hot_bids_6.png';
import userIconImg from '@/assets/images/home/usericon2.png';
import {
  CategoryList,
  ItemCard,
  MobileCategoryList,
  Select
} from '@/components';

import styles from './_index.module.scss';

const Category1Data = {
  title: 'Category',
  categories: [
    'All',
    'Food',
    'Minted',
    'Stars',
    'Music',
    'Sports',
    'Movies',
    'Art',
    'Photography'
  ]
};
const Category2Data = {
  title: 'Sale Type',
  categories: ['All', 'Listings', 'Minted', 'Sales', 'Bids', 'Transfers']
};
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

const selectOptions1 = [
  {
    label: 'Price-Highest',
    id: 1
  },
  {
    label: 'Price-Lowest',
    id: 2
  },
  {
    label: 'Time-Newest',
    id: 3
  }
];
const selectOptions2 = [
  {
    label: 'Add Time Newest',
    id: 1
  },
  {
    label: 'Add Time Oldest',
    id: 2
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
        'market'
      ]))
    }
  };
}

function Market(props: marketProps) {
  const { className } = props;
  const { t } = useTranslation('market');

  return (
    <>
      <NextSeo
        title={t('MARKET_PAGE_SEO_TITLE')}
        description={t('MARKET_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.market, className, 'container')}>
        <div className="my-10 text-[1.75rem] font-bold">
          Explore all collections
        </div>
        <CategoryList
          title={Category1Data.title}
          categories={Category1Data.categories}
        />
        <CategoryList
          title={Category2Data.title}
          categories={Category2Data.categories}
        />
        <MobileCategoryList />

        <div className="mb-10 hidden lg:flex">
          <Select
            style={{ width: '12.5rem', marginRight: '3rem' }}
            options={selectOptions1}
          />
          <Select style={{ width: '12.5rem' }} options={selectOptions2} />
        </div>

        <div className="lg:hidden">mobile selections</div>

        <div className="grid grid-cols-1 grid-rows-3 gap-x-44 gap-y-8 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-44">
          {hotBidsData.map((item) => (
            <ItemCard className={styles.marketItem} key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Market;
