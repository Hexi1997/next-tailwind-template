import cn from 'classnames';
import { shuffle } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';

import searchImg from '@/assets/images/result/search.svg';
import userBg1Img from '@/assets/images/result/userBg1.png';
import userBg2Img from '@/assets/images/result/userBg2.png';
import userIcon1Img from '@/assets/images/result/userIcon1.png';
import userIcon2Img from '@/assets/images/result/userIcon2.png';
import userIcon3Img from '@/assets/images/result/userIcon3.png';
import { ItemCard, Tabs } from '@/components';
import { NoData } from '@/components/NoData';
import { CollectionListArea } from '@/components/Pages/Collections/CollectionListArea';
import { ItemsData } from '@/components/Pages/Home/SectionHotBids';
import { UserCard } from '@/components/UserCard';

import { collectionAllMockData } from '../collections/all';
import styles from './_index.module.scss';

interface resultProps {
  className?: string;
}

export interface IUserCard {
  bg: StaticImageData;
  icon: StaticImageData;
  name: string;
}

const mockUserSearchResult: IUserCard[] = [
  {
    name: 'Danvid',
    bg: userBg1Img,
    icon: userIcon1Img
  },
  {
    name: 'Unnamed',
    bg: userBg1Img,
    icon: userIcon3Img
  },
  {
    name: 'Yongzi',
    bg: userBg2Img,
    icon: userIcon2Img
  },
  {
    name: 'Danvid',
    bg: userBg1Img,
    icon: userIcon1Img
  },
  {
    name: 'Unnamed',
    bg: userBg2Img,
    icon: userIcon3Img
  },
  {
    name: 'Yongzi',
    bg: userBg2Img,
    icon: userIcon2Img
  }
];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'result'
      ]))
    }
  };
}

function Result(props: resultProps) {
  const { className } = props;
  const router = useRouter();
  const { query } = router.query;
  const { t } = useTranslation(['common', 'result']);
  const [isShowNoData, toggleShowNoData] = useToggle(true);

  useEffect(() => {
    setTimeout(toggleShowNoData, 6000);
  }, [toggleShowNoData]);

  return (
    <>
      <NextSeo
        title={t('RESULT_PAGE_SEO_TITLE', { query, ns: 'result' })}
        description={t('RESULT_PAGE_SEO_DESC', { query, ns: 'result' })}
      />
      <div
        className={cn(styles.result, 'container', className, 'min-h-screen')}
      >
        <h1 className="my-10 text-[28px] font-bold text-[#666666]">
          {t('RESULT_PAGE_FOR', { query, ns: 'result' })}
        </h1>
        <Tabs
          tabTitleFontSize="22px"
          tabs={[
            {
              title: t('COMMON_SEARCH_RESULT_COLLECTIONS_TITLE'),
              element: (
                <CollectionListArea
                  className="my-10"
                  data={shuffle(collectionAllMockData)}
                />
              )
            },
            {
              title: t('COMMON_SEARCH_RESULT_ITEMS_TITLE'),
              element: (
                <div className="my-10 grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
                  {ItemsData.map((item, index) => (
                    <ItemCard data={item} key={index} />
                  ))}
                </div>
              )
            },
            {
              title: t('COMMON_SEARCH_RESULT_USERS_TITLE'),
              element: isShowNoData ? (
                <NoData
                  className="mt-[112px]"
                  icon={searchImg}
                  title={t('COMMON_SEARCH_NO_RESULTS')}
                  desc={t('COMMON_SEARCH_NO_RESULTS_DESC', {
                    query,
                    tabName: t('COMMON_SEARCH_RESULT_USERS_TITLE')
                  })}
                />
              ) : (
                <div className="my-10 grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
                  {mockUserSearchResult.map((item, index) => (
                    <UserCard data={item} key={index} />
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>
    </>
  );
}

export default Result;
