/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from 'next-themes';
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
  const { theme, setTheme } = useTheme();

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
        className="h-10 w-40 bg-black text-white dark:bg-white dark:text-black"
      >
        change language
      </button>
      <div>
        The current theme is: {theme} <br />
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="bg-black px-10 py-4 text-white dark:bg-white dark:text-black"
        >
          toggle theme
        </button>
        <br />
      </div>
    </div>
  );
}

export default Home;
