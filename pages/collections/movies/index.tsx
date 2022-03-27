import cn from 'classnames';
import { shuffle } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';

import { CollectionListArea } from '@/components/Pages/Collections/CollectionListArea';
import { CollectionsLayout } from '@/components/Pages/Collections/CollectionsLayout';

import { collectionAllMockData } from '../all';
import styles from './_index.module.scss';

interface moviesProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['menu', 'common']))
    }
  };
}

function Movies(props: moviesProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="Movies Collection"
        description="movies collection description"
      />
      <div className={cn(styles.movies, className, 'container')}>
        <CollectionsLayout>
          <CollectionListArea data={shuffle(collectionAllMockData)} />
        </CollectionsLayout>
      </div>
    </>
  );
}

export default Movies;
