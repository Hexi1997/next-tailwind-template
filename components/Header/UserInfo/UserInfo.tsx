import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { useWindowSize } from 'react-use';

import infoImg from '@/assets/images/header/admin.svg';
import collectionsImg from '@/assets/images/header/collections.svg';
import collectionsWhiteImg from '@/assets/images/header/collections_white.svg';
import favoritesImg from '@/assets/images/header/favorites.svg';
import favoritesWhiteImg from '@/assets/images/header/favorites_white.svg';
import profileImg from '@/assets/images/header/profile.svg';
import profileWhiteImg from '@/assets/images/header/profile_white.svg';
import settingsImg from '@/assets/images/header/settings.svg';
import settingsWhiteImg from '@/assets/images/header/settings_white.svg';
import signOutImg from '@/assets/images/header/signout.svg';
import signOutWhiteImg from '@/assets/images/header/signout_white.svg';
import { Button } from '@/components/Common/Button';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './UserInfo.module.scss';

interface UserInfoProps {
  className?: string;
}

const links = [
  {
    icon: profileImg,
    icon_white: profileWhiteImg,
    title: 'MENU_USER_PROFILE',
    link: '/profile/1'
  },
  {
    icon: collectionsImg,
    icon_white: collectionsWhiteImg,
    title: 'MENU_USER_COLLECTIONS',
    link: '/mycollections'
  },
  {
    icon: favoritesImg,
    icon_white: favoritesWhiteImg,
    title: 'MENU_USER_FAVORITES',
    link: '/myfavorites'
  },
  {
    icon: settingsImg,
    icon_white: settingsWhiteImg,
    title: 'MENU_USER_SETTINGS',
    link: '/settings'
  }
];

export function UserInfo(props: UserInfoProps) {
  const { className } = props;
  const [hoverSubMenuTitle, setHoverSubMenuTitle] = useState('');
  const [isShowUserInfo, setIsShowUserInfo] = useState(false);
  const [isHoverSignOut, setIsHoverSignOut] = useState(false);
  const { width } = useWindowSize();
  // useTranslation可以引入多个namespace，然后t方法调用的时候设置ns参数指定namespace,如果不传，默认指向第一个
  const { t } = useTranslation(['menu', 'common']);

  return (
    <div className={cn(styles.UserInfo, className)}>
      <div
        className="relative z-20 flex h-16 cursor-pointer items-center justify-center p-4 sm:p-0"
        onMouseEnter={() => {
          if (width > 640) {
            setIsShowUserInfo(true);
          }
        }}
        onMouseLeave={() => {
          setIsShowUserInfo(false);
        }}
        onClick={() => {
          setIsShowUserInfo(!isShowUserInfo);
        }}
      >
        <Image src={infoImg} />
        {isShowUserInfo && (
          <RoundedContainer className="absolute top-16 -left-40 flex flex-col text-base">
            <span className="px-[18px] pt-6 pb-2">0x88b4b153184...7c1bd</span>
            <div className="mx-[18px] flex flex-col space-y-2 rounded-lg p-5 pb-3 shadow-xl">
              <span className="font-medium">
                {t('COMMON_BALANCE', { ns: 'common' })}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">FLOW</span>
                <span className="text-xl font-bold">0.014</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#666666]">FUSD</span>
                <span className="text-xl font-bold">21.501</span>
              </div>
              <Button
                onClick={() => {
                  console.log('click add');
                }}
                type="Primary"
                className="h-8 w-full !rounded-full"
              >
                {t('MENU_USER_BUTTON_ADD_FUNDS')}
              </Button>
            </div>
            <ul className="flex w-full flex-col pt-4">
              {links.map((item) => (
                <Link href={item.link} key={item.title}>
                  <a
                    onMouseEnter={() => {
                      setHoverSubMenuTitle(item.title);
                    }}
                    onMouseLeave={() => {
                      setHoverSubMenuTitle('');
                    }}
                    className={cn(
                      styles.icon,
                      'flex h-10 w-full items-center space-x-3 px-[18px]',
                      hoverSubMenuTitle === item.title
                        ? 'bg-themeGreen text-white'
                        : ''
                    )}
                  >
                    <Image
                      src={
                        item.title === hoverSubMenuTitle
                          ? item.icon_white
                          : item.icon
                      }
                      width="16"
                    />
                    <span>{t(item.title)}</span>
                  </a>
                </Link>
              ))}
            </ul>
            <hr />
            <div
              onClick={() => {
                console.log('sign out');
              }}
            >
              <div
                onMouseEnter={() => {
                  setIsHoverSignOut(true);
                }}
                onMouseLeave={() => {
                  setIsHoverSignOut(false);
                }}
                className={cn(
                  'flex h-12 w-full items-center space-x-3 px-[18px]',
                  isHoverSignOut ? 'bg-themeGreen text-white' : ''
                )}
              >
                <Image
                  src={isHoverSignOut ? signOutWhiteImg : signOutImg}
                  width="16"
                />
                <span>{t('MENU_USER_SIGN_OUT')}</span>
              </div>
            </div>
          </RoundedContainer>
        )}
      </div>
    </div>
  );
}
