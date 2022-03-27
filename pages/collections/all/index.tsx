import cn from 'classnames';
import { shuffle } from 'lodash';
import { GetStaticPropsContext } from 'next';
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
      ...(await serverSideTranslations(locale || '', ['menu', 'common']))
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

  return (
    <>
      <NextSeo
        title="All Collections"
        description="all collections description"
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
