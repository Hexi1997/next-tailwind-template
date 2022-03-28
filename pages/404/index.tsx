import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface PageNotFoundProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['menu', '404', 'common']))
    }
  };
}

function PageNotFound(props: PageNotFoundProps) {
  const { className } = props;
  const { t } = useTranslation('404');

  return (
    <>
      <NextSeo
        title={t('404_PAGE_SEO_TITLE')}
        description={t('404_PAGE_SEO_DESC')}
      />
      <div
        className={cn(
          styles.PageNotFound,
          className,
          'flex h-[calc(100vh_-_64px)] w-[100vw] items-center justify-center'
        )}
      >
        <div className="item-center flex justify-center">
          <span className="text-2xl font-bold">404</span>
          <div className="mx-5 h-10 w-[2px] bg-gray-300"></div>
          <div className="mt-1 text-base">{t('404_PAGE_SEO_DESC')}</div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
