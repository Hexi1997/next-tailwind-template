import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface photographyProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Photography(props: photographyProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="photography collection"
        description="photography collection description"
      />
      <div className={cn(styles.photography, className)}>photography</div>
    </>
  );
}

export default Photography;
