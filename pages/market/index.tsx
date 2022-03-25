import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

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
      <NextSeo title="seo title" description="seo description" />
      <div className={cn(styles.market, className)}>market</div>
    </>
  );
}

export default Market;
