import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface musicProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Music(props: musicProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="music collection"
        description="music collection description"
      />
      <div className={cn(styles.music, className)}>music</div>
    </>
  );
}

export default Music;
