import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useMemo, useState } from 'react';

import allImg from '@/assets/images/header/all.svg';
import artImg from '@/assets/images/header/art.svg';
import foodImg from '@/assets/images/header/food.svg';
import moviesImg from '@/assets/images/header/movies.svg';
import musicImg from '@/assets/images/header/music.svg';
import photographyImg from '@/assets/images/header/photography.svg';
import sportsImg from '@/assets/images/header/sports.svg';
import starsImg from '@/assets/images/header/stars.svg';
import { RoundedContainer } from '@/components/RoundedContainer';

import styles from './Nav.module.scss';

interface NavProps {
  className?: string;
}

interface IMenu {
  name: string;
  link: string;
  icon?: string;
  sub?: IMenu[];
}

export const menus: IMenu[] = [
  {
    name: 'MENU_MARKET',
    link: '/market'
  },
  {
    name: 'MENU_COLLECTIONS',
    link: '/collections',
    sub: [
      {
        name: 'MENU_COLLECTIONS_ALL',
        link: '/collections/all',
        icon: allImg
      },
      {
        name: 'MENU_COLLECTIONS_ART',
        link: '/collections/art',
        icon: artImg
      },
      {
        name: 'MENU_COLLECTIONS_SPORTS',
        link: '/collections/sports',
        icon: sportsImg
      },
      {
        name: 'MENU_COLLECTIONS_MUSIC',
        link: '/collections/music',
        icon: musicImg
      },
      {
        name: 'MENU_COLLECTIONS_MOVIES',
        link: '/collections/movies',
        icon: moviesImg
      },
      {
        name: 'MENU_COLLECTIONS_PHOTOGRAPHY',
        link: '/collections/photography',
        icon: photographyImg
      },
      {
        name: 'MENU_COLLECTIONS_FOOD',
        link: '/collections/food',
        icon: foodImg
      },
      {
        name: 'MENU_COLLECTIONS_STARS',
        link: '/collections/stars',
        icon: starsImg
      }
    ]
  },
  {
    name: 'MENU_CREATE',
    link: '/create'
  }
];

export function Nav(props: NavProps) {
  const { className } = props;
  const router = useRouter();
  const [hoverMenuName, setHoverMenuName] = useState('');
  const { t } = useTranslation('menu');
  const focusMenuItem = useMemo(() => {
    const routeArr = router.asPath.split('/');
    if (routeArr.length >= 2) {
      return menus.find((item) => item.link === '/' + routeArr[1]);
    }
  }, [router.asPath]);
  return (
    <div className={cn(styles.Nav, className, 'hidden lg:block')}>
      <nav>
        <ul className="flex items-center space-x-2 h-16">
          {menus.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                setHoverMenuName(item.name);
              }}
              onMouseLeave={() => {
                setHoverMenuName('');
              }}
            >
              <Link href={item.link}>
                <a
                  className={cn(
                    'text-sm text-neutral-700 h-16 flex items-center'
                  )}
                >
                  <span
                    className={cn(
                      'px-4 py-2',
                      focusMenuItem?.name === item.name
                        ? 'rounded-full bg-themeGreen text-white'
                        : ''
                    )}
                  >
                    {t(item.name)}
                  </span>
                </a>
              </Link>
              {item.sub && item.sub.length > 0 && hoverMenuName === item.name && (
                <RoundedContainer className="absolute top-16">
                  <ul>
                    {item.sub.map((subitem) => (
                      <li
                        key={subitem.name}
                        className={cn(
                          'w-48 h-10 hover:bg-themeGreen hover:text-white'
                        )}
                        onClick={() => {
                          setHoverMenuName('');
                        }}
                      >
                        <Link href={subitem.link}>
                          <a className="w-full h-full pl-3 text-sm flex items-center space-x-4">
                            <Image src={subitem.icon || ''} width="22" />
                            <span>{t(subitem.name)}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </RoundedContainer>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
