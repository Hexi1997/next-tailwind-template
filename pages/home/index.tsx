import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCallback } from 'react';

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
  const router = useRouter();

  const handleLocaleChange = useCallback(() => {
    router
      .replace(router.asPath, router.asPath, {
        locale: router.locale === 'zh' ? 'en' : 'zh'
      })
      .catch(console.error);
  }, [router]);

  return (
    <div className={cn(styles.home, className)}>
      <button
        onClick={handleLocaleChange}
        className="w-40 h-10 bg-gray-500 text-white"
      >
        change language
      </button>
    </div>
  );
}

export default Home;
