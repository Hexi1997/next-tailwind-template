import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface allProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function All(props: allProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="all collections"
        description="all collections description"
      />
      <div className={cn(styles.all, className)}>all</div>
    </>
  );
}

export default All;
