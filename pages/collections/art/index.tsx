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

interface artProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Art(props: artProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="Art Collections"
        description="art collections description"
      />
      <div className={cn(styles.art, className, 'container')}>
        <CollectionsLayout>
          <CollectionListArea data={shuffle(collectionAllMockData)} />
        </CollectionsLayout>
      </div>
    </>
  );
}

export default Art;
