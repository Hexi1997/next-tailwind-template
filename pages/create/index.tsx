import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface createProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'create'
      ]))
    }
  };
}

function Create(props: createProps) {
  const { className } = props;
  const { t } = useTranslation('create');

  return (
    <>
      <NextSeo
        title={t('CREATE_PAGE_SEO_TITLE')}
        description={t('CREATE_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.create, className, 'container')}>create</div>
    </>
  );
}

export default Create;
