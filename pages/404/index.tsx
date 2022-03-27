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
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function PageNotFound(props: PageNotFoundProps) {
  const { className } = props;
  const { t } = useTranslation('common');

  return (
    <>
      <NextSeo title="Page Not Found" description="Page Not Found" />
      <div
        className={cn(
          styles.PageNotFound,
          className,
          'w-[100vw] h-[calc(100vh_-_64px)] flex items-center justify-center'
        )}
      >
        <div className="flex item-center justify-center">
          <span className="font-bold text-2xl">404</span>
          <div className="w-[2px] bg-gray-300 h-10 mx-5"></div>
          <div className="text-base mt-1">{t('COMMON_PAGE_NOT_FOUND')}</div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
