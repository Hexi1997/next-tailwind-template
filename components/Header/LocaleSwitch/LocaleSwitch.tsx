import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import localeImg from '@/assets/images/header/locale.svg';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './LocaleSwitch.module.scss';

interface LocaleSwitchProps {
  className?: string;
}

export type LanguageType = 'en' | 'zh';
export const Languages: {
  [key: string]: { headerLabel: string; subMenuLabel: string };
} = {
  en: {
    headerLabel: 'EN',
    subMenuLabel: 'English'
  },
  zh: {
    headerLabel: '中文',
    subMenuLabel: '中文'
  }
};

const languages = Object.keys(Languages).map((item) => ({
  value: item,
  title: Languages[item].subMenuLabel
}));

export function LocaleSwitch(props: LocaleSwitchProps) {
  const { className } = props;
  const router = useRouter();

  const handleLocaleChange = useCallback(
    (value: string) => {
      return () => {
        if (value !== router.locale) {
          router
            .replace(router.pathname, router.pathname, {
              locale: router.locale === 'zh' ? 'en' : 'zh'
            })
            .catch(console.error);
        }
      };
    },
    [router]
  );

  const [isShowLocaleSubMenu, setIsShowLocaleSubMenu] = useState(false);

  return (
    <div className={cn(styles.LocaleSwitch, className, 'hidden sm:block')}>
      <div
        className="relative flex h-16 cursor-pointer items-center justify-center"
        onMouseEnter={() => {
          setIsShowLocaleSubMenu(true);
        }}
        onMouseLeave={() => {
          setIsShowLocaleSubMenu(false);
        }}
      >
        <Image src={localeImg} className="h-5 w-5" />
        <span className="ml-1">
          {Languages[router.locale || '']?.headerLabel}
        </span>
        {isShowLocaleSubMenu && (
          <RoundedContainer className="absolute top-16 -left-8">
            <ul>
              {languages.map((item) => (
                <li
                  onClick={handleLocaleChange(item.value)}
                  key={item.value}
                  className={cn(
                    'h-10 w-40 hover:bg-themeGreen hover:text-white'
                  )}
                >
                  <div className="flex h-full w-full items-center space-x-4 pl-3 text-sm">
                    <span>{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </RoundedContainer>
        )}
      </div>
    </div>
  );
}
