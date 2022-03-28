import cn from 'classnames';
import { shuffle } from 'lodash';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { CollectionListArea } from '@/components/Pages/Collections/CollectionListArea';
import { CollectionsLayout } from '@/components/Pages/Collections/CollectionsLayout';
import { collectionMockData } from '@/components/Pages/Home/SectionLatest';

import styles from './_index.module.scss';

interface allProps {
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

export const collectionAllMockData = [
  ...collectionMockData,
  ...collectionMockData,
  ...collectionMockData,
  ...collectionMockData
];

function All(props: allProps) {
  const { className } = props;
  const { t } = useTranslation('collections');

  return (
    <>
      <NextSeo
        title={t('COLLECTIONS_ALL_PAGE_SEO_TITLE')}
        description={t('COLLECTIONS_ALL_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.all, className, 'container')}>
        <CollectionsLayout>
          <CollectionListArea data={shuffle(collectionAllMockData)} />
        </CollectionsLayout>
      </div>
    </>
  );
}

export default All;
