import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface sportsProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Sports(props: sportsProps) {
  const { className } = props;

  return (
    <>
      <NextSeo title="seo title" description="seo description" />
      <div className={cn(styles.sports, className)}>sports</div>
    </>
  );
}

export default Sports;
