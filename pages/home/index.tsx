import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './_index.module.scss';

interface homeProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common']))
    }
  };
}

function Home(props: homeProps) {
  const { className } = props;

  return <div className={cn(styles.home, className)}>home</div>;
}

export default Home;
