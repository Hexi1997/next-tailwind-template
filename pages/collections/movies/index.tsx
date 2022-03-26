import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface moviesProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Movies(props: moviesProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="movies collection"
        description="movies collection description"
      />
      <div className={cn(styles.movies, className, 'container')}>movies</div>
    </>
  );
}

export default Movies;
