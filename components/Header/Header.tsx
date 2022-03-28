import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import styles from './Header.module.scss';
import { LocaleSwitch } from './LocaleSwitch';
import { Nav } from './Nav';
import { MobileNav } from './Nav/MobileNav';
import { Search } from './Search';
import { UserInfo } from './UserInfo';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps) {
  const { className } = props;
  const { t } = useTranslation('common');

  return (
    <header
      className={cn(
        styles.Header,
        className,
        'sticky top-0 z-10 flex items-center justify-between space-x-4 bg-white px-2 text-[#333333] shadow-md dark:bg-black md:px-4 lg:px-12'
      )}
    >
      {/* logo area */}
      <div className="flex flex-1 items-center space-x-4">
        <Link href="/">
          <span className="text-base font-semibold text-stone-800 hover:cursor-pointer">
            {t('COMMON_MARKET_NAME')}
          </span>
        </Link>
        <Search className="hidden max-w-[456px] sm:block" />
      </div>
      <div className="flex items-center sm:space-x-4">
        <Nav />
        <LocaleSwitch />
        <UserInfo />
        <MobileNav />
      </div>
    </header>
  );
}
