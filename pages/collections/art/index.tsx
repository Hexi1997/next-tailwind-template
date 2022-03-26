import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

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
        title="art collections"
        description="art collections description"
      />
      <div className={cn(styles.art, className, 'container')}>art</div>
    </>
  );
}

export default Art;
