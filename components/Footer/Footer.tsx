import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import discord from '@/assets/images/footer/discord.svg';
import meta from '@/assets/images/footer/meta.svg';
import twitter from '@/assets/images/footer/twitter.svg';

import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        styles.Footer,
        className,
        'bg-[#29a654] px-[75px] text-white',
        'text-center',
        'lg:text-right'
      )}
    >
      <div
        className={cn(
          'pt-10 text-xl font-normal',
          'lg:mb-0 lg:block lg:text-left',
          'mb-12 flex items-center justify-center text-center'
        )}
      >
        <div
          className={cn(
            'h-[50px] w-[50px] rounded-[50%] bg-white',
            'lg:mb-4',
            'mr-4'
          )}
        ></div>
        Flow Market
      </div>
      <div
        className={cn(
          'mb-6 flex justify-between',
          'lg:flex-row lg:items-end',
          'flex-col'
        )}
      >
        <div
          className={cn(
            'grid translate-y-[-50%] items-center justify-items-center gap-x-20 text-[24px] font-black leading-[24px]',
            'lg:my-0',
            'sm:my-8 sm:grid-cols-3 sm:grid-rows-1',
            'gap-y-6',
            'mt-10'
          )}
        >
          <Link href="/collections">Collections</Link>
          <Link href="/market">Market</Link>
          <Link href="/activities">Activities</Link>
        </div>
        <div className={cn('lg:block', 'flex items-center justify-center')}>
          <p
            className={cn(
              'text-xl font-extralight',
              'lg:mb-[20px] lg:mr-0',
              'mr-[32px]'
            )}
          >
            contact us
          </p>
          <div
            className={cn(
              'item-center grid grid-cols-3 grid-rows-1 justify-between gap-x-[32px]'
            )}
          >
            <Link href="/">
              <div className="flex h-[44px] w-[44px] cursor-pointer justify-center rounded-[16px] bg-white align-middle">
                <Image src={twitter} />
              </div>
            </Link>
            <Link href="/">
              <div className="flex h-[44px] w-[44px] cursor-pointer justify-center rounded-[16px] bg-white align-middle">
                <Image src={meta} />
              </div>
            </Link>
            <Link href="/">
              <div className="flex h-[44px] w-[44px] cursor-pointer justify-center rounded-[16px] bg-white align-middle">
                <Image src={discord} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-solid border-white pt-[20px] pb-[30px] text-base">
        Copyright 2022 Matrix Labs Design &amp; Development
      </div>
    </div>
  );
}
