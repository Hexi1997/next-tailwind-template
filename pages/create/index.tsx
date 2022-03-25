import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface createProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || ''))
    }
  };
}

function Create(props: createProps) {
  const { className } = props;

  return (
    <>
      <NextSeo title="seo title" description="seo description" />
      <div className={cn(styles.create, className)}>create</div>
    </>
  );
}

export default Create;
