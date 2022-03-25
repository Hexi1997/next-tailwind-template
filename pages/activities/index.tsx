import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface activitiesProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Activities(props: activitiesProps) {
  const { className } = props;

  return (
    <>
      <NextSeo
        title="activities page"
        description="activities page's description"
      />
      <div className={cn(styles.activities, className)}>activities</div>
    </>
  );
}

export default Activities;
