import cn from 'classnames';
import { shuffle } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';

import { CollectionListArea } from '@/components/Pages/Collections/CollectionListArea';
import { CollectionsLayout } from '@/components/Pages/Collections/CollectionsLayout';

import { collectionAllMockData } from '../all';
import styles from './_index.module.scss';

interface sportsProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'collections'
      ]))
    }
  };
}

function Sports(props: sportsProps) {
  const { className } = props;
  const { t } = useTranslation('collections');

  return (
    <>
      <NextSeo
        title={t('COLLECTIONS_SPORTS_PAGE_SEO_TITLE')}
        description={t('COLLECTIONS_SPORTS_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.sports, className, 'container')}>
        <CollectionsLayout>
          <CollectionListArea
            className="mb-10"
            data={shuffle(collectionAllMockData)}
          />
        </CollectionsLayout>
      </div>
    </>
  );
}

export default Sports;
