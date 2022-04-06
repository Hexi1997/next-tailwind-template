import axios from 'axios';
import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';

import { SectionFirstScreen } from '@/components/Pages/Home/SectionFirstScreen';
import { SectionHotBids } from '@/components/Pages/Home/SectionHotBids';
import { SectionHotCollections } from '@/components/Pages/Home/SectionHotCollections';
import { SectionLatest } from '@/components/Pages/Home/SectionLatest';
import { SectionTopCollectionsOneDay } from '@/components/Pages/Home/SectionTopCollectionsOneDay';

import styles from './_index.module.scss';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'menu',
        'home'
      ]))
    }
  };
}

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <NextSeo
        title={t('HOME_PAGE_SEO_TITLE')}
        description={t('HOME_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.Home, 'container')}>
        <SectionFirstScreen />
        <SectionLatest />
        <SectionHotBids />
        <SectionTopCollectionsOneDay />
        <SectionHotCollections />
      </div>
    </>
  );
};

export default Home;
