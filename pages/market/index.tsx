import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import hotBidsImg2 from '@/assets/images/home/hot_bids_3.png';
import hotBidsImg3 from '@/assets/images/home/hot_bids_4.png';
import hotBidsImg4 from '@/assets/images/home/hot_bids_5.png';
import hotBidsImg5 from '@/assets/images/home/hot_bids_6.png';
import userIconImg from '@/assets/images/home/usericon2.png';
import { CategoryList, ItemCard, Option, Select } from '@/components';

import styles from './_index.module.scss';

export const Category1Data = {
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
export const Category2Data = {
  title: 'Sale Type',
  categories: ['All', 'Listings', 'Minted', 'Sales', 'Bids', 'Transfers']
};
export const hotBidsData = [
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

export const selectOptions1 = ['Price-Highest', 'Price-Lowest', 'Time-Newest'];
export const selectOptions2 = ['Add Time Newest', 'Add Time Oldest'];

interface marketProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Market(props: marketProps) {
  const { className } = props;

  return (
    <>
      <NextSeo title="market page" description="market page description" />
      <div className={cn(styles.market, className)}>
        <div className={styles.marketTitle}>Explore all collections</div>
        <CategoryList
          title={Category1Data.title}
          categories={Category1Data.categories}
        />
        <CategoryList
          title={Category2Data.title}
          categories={Category2Data.categories}
        />

        <div className={styles.marketSelect}>
          <Select
            style={{ width: '12.5rem', marginRight: '3rem' }}
            placeholder="select your preference"
            defaultValue={'Price-Highest'}
          >
            {selectOptions1.map((option: string) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <Select
            style={{ width: '12.5rem' }}
            placeholder="select your preference"
            defaultValue={'Add Time Newest'}
          >
            {selectOptions2.map((option: string) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>

        <div className={styles.marketList}>
          {hotBidsData.map((item) => (
            <ItemCard className={styles.marketItem} key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Market;
