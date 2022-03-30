import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface itemIdProps {
  className?: string;
}

export async function getServerSideProps({
  locale
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'menu']))
    }
  };
}

function ItemId(props: itemIdProps) {
  const { className } = props;

  return (
    <>
      <NextSeo title="seo title" description="seo description" />
      <div className={cn(styles.itemId, 'container', className)}>
        nft detail page
      </div>
    </>
  );
}

export default ItemId;
