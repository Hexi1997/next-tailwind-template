import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface foodProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Food(props: foodProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="food collections"
        description="food collections description"
      />
      <div className={cn(styles.food, className, 'container')}>food</div>
    </>
  );
}

export default Food;
