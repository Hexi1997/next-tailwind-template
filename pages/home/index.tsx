import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
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
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

const Home = () => {
  return (
    <>
      <NextSeo title="Home page" description="Home page of flow market place" />
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
