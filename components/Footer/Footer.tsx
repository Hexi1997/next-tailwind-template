import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { useWindowSize } from 'react-use';

import discord from '@/assets/images/footer/discord.svg';
import medium from '@/assets/images/footer/medium.svg';
import twitter from '@/assets/images/footer/twitter.svg';

import globalConfig from '../../assets/i18n/flowmarket-frontend-copywriter/global';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const contactAppList = [
  {
    id: 1,
    app: twitter,
    link: globalConfig.socialLinks.twitter
  },
  {
    id: 2,
    app: medium,
    link: globalConfig.socialLinks.medium
  },
  {
    id: 3,
    app: discord,
    link: globalConfig.socialLinks.discord
  }
];
const menuList = [
  {
    id: 1,
    title: 'MENU_COLLECTIONS',
    link: '/collections'
  },
  {
    id: 2,
    title: 'MENU_MARKET',
    link: '/market'
  }
];

export function Footer(props: FooterProps) {
  const { className } = props;
  const { t } = useTranslation(['common', 'menu']);
  const { width } = useWindowSize();
  const isMobile = useMemo(() => {
    return width < 1024;
  }, [width]);

  return (
    <div
      className={cn(
        styles.Footer,
        className,
        'lg:px-[75px]',
        'bg-[#29a654] text-white'
      )}
    >
      {/* PC端：左右排列，移动端：上下反向排列 */}
      <div
        className={cn(
          'flex',
          'lg:flex-row lg:items-end lg:justify-between lg:pb-6',
          'flex flex-col-reverse px-4'
        )}
      >
        <div className={cn('lg:pt-10', 'pt-3')}>
          <div
            className={cn(
              'mb-4 h-[50px] w-[50px] rounded-[50%] bg-white',
              'lg:block',
              'hidden'
            )}
          ></div>
          <div
            className={cn(
              'lg:text-left lg:text-xl lg:font-semibold',
              'text-center text-xs font-semibold'
            )}
          >
            {t('COMMON_MARKET_NAME')}
          </div>
          <div
            className={cn(
              'grid grid-cols-2',
              'lg:mt-12 lg:justify-items-start lg:gap-20 lg:pb-2',
              'mt-3 justify-items-center gap-6 pb-4'
            )}
          >
            {menuList.map((item) => (
              <Link key={item.id} href={item.link}>
                <span
                  className={cn(
                    'font-black hover:cursor-pointer',
                    'lg:text-2xl',
                    'text-sm'
                  )}
                >
                  {t(item.title, { ns: 'menu' })}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className={cn('lg:pt-0 lg:text-right', 'pt-4 text-center')}>
          <div className={cn('lg:mb-5 lg:text-[22px]', 'mb-3 text-sm')}>
            {t('COMMON_CONTACT_US')}
          </div>
          <div
            className={cn(
              'grid grid-cols-3 justify-items-center gap-6',
              'lg:px-0',
              'px-28'
            )}
          >
            {contactAppList.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    'flex items-center justify-center bg-white',
                    'lg:h-11 lg:w-11 lg:rounded-2xl',
                    'h-6 w-6 rounded-lg'
                  )}
                >
                  <Image
                    src={item.app}
                    width={isMobile ? 9 : 19}
                    height={isMobile ? 11 : 22}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className={cn('mt-4 h-[1px] bg-white', 'lg:hidden')}></div>
        </div>
      </div>
      <div className={cn('h-[1px] bg-white', 'lg:block', 'hidden')}></div>
      <div
        className={cn(
          'lg:bg-[#29a654] lg:pt-5 lg:pb-8 lg:text-right lg:text-base lg:text-white',
          'bg-white py-1 text-center text-xs text-[#29a654]'
        )}
      >
        {t('COMMON_COPYRIGHT')}
      </div>
    </div>
  );
}
