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
        'bg-[#29a654] px-[75px] text-right text-white'
      )}
    >
      <div className="pt-10 text-left text-xl font-normal">
        <div className="mb-4 h-[50px] w-[50px] rounded-[50%] bg-white"></div>
        Flow Market
      </div>
      <p className="mb-[20px] text-xl font-extralight">contact us</p>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex justify-center align-middle text-[1.5rem] font-black leading-[1.5rem]">
          <Link href="/collections">
            <div className="mr-[5rem]">Collections</div>
          </Link>
          <Link href="/market">
            <div className="mr-[5rem]">Market</div>
          </Link>
          <Link href="/activities">Activities</Link>
        </div>
        <div className="flex justify-between align-middle">
          <Link href="/">
            <div className="mr-[24px] flex h-[44px] w-[44px] cursor-pointer justify-center rounded-[16px] bg-white align-middle">
              <Image src={twitter} />
            </div>
          </Link>
          <Link href="/">
            <div className="mr-[24px] flex h-[44px] w-[44px] cursor-pointer justify-center rounded-[16px] bg-white align-middle">
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
      <div className="border-t-[1px] border-solid border-white pt-[20px] pb-[30px] text-base">
        Copyright 2022 Matrix Labs Design &amp; Development
      </div>
    </div>
  );
}
