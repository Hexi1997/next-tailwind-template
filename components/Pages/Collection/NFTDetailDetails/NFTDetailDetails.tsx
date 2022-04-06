import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import aboutCollection from '@/assets/images/collection/aboutCollection.svg';
import aboutNFT from '@/assets/images/collection/aboutNFT.svg';
import discord from '@/assets/images/collection/discord.svg';
import ins from '@/assets/images/collection/ins.svg';
import others from '@/assets/images/collection/others.svg';
import twitter from '@/assets/images/collection/twitter.svg';
import website from '@/assets/images/collection/website.svg';
import userIconImg from '@/assets/images/home/usericon2.png';

import styles from './NFTDetailDetails.module.scss';

interface NFTDetailDetailsProps {
  className?: string;
}

export function NFTDetailDetails(props: NFTDetailDetailsProps) {
  const { className } = props;
  const { t } = useTranslation('collection');
  const othersInfo = [
    {
      title: t('COLLECTION_NFT_TAB_DETAIL_CONTRACT_ADDRESS'),
      content: 'Oxbc4c…F13d'
    },
    { title: t('COLLECTION_NFT_TAB_DETAIL_TOKEN_ID'), content: '6045' },
    {
      title: t('COLLECTION_NFT_TAB_DETAIL_TOKEN_STANDARD'),
      content: 'Erc-721'
    },
    { title: t('COLLECTION_NFT_TAB_DETAIL_BLOCKCHAIN'), content: 'Ethereum' },
    { title: t('COLLECTION_NFT_TAB_DETAIL_METADATA'), content: 'Forzen' }
  ];

  return (
    <div
      className={cn(
        styles.NFTDetailDetails,
        className,
        'lg:mt-[28px] lg:overflow-hidden lg:rounded-lg lg:border-2 lg:bg-white lg:px-[32px] lg:py-[24px] lg:shadow-lg'
      )}
    >
      <div className="divide-y-[1px] divide-solid divide-[#dddddd]">
        <h2 className="pb-3 text-[#666666]">
          <Image src={aboutNFT} />
          <span className="pl-3">
            {t('COLLECTION_NFT_TAB_DETAIL_ABOUT_NFT')}
          </span>
        </h2>
        <p
          className={cn(
            'pt-3 text-xs leading-6 text-[#333333]',
            'lg:pt-5 lg:text-sm lg:leading-6'
          )}
        >
          I&apos;ve worked in book cover design, small press comics, mural art,
          and more. My biggest inspirations are the great illustrators Moebius,
          Alex Toth, and Paul Pope.
        </p>
      </div>
      <div
        className={cn(
          'divide-y-[1px] divide-solid divide-[#dddddd]',
          'lg:mt-[45px]',
          'mt-5'
        )}
      >
        <h2 className="pb-[10px] text-[#666666]">
          <Image src={aboutCollection} />
          <span className="pl-[12px]">
            {t('COLLECTION_NFT_TAB_DETAIL_ABOUT_COLLECTION')}
          </span>
        </h2>
        <div>
          <div className="mt-5 flex justify-between">
            <div className="flex items-center">
              <Image src={userIconImg} width={28} height={28} />
              <span
                className={cn(
                  'lg:pl-2 lg:text-sm lg:font-normal',
                  'pl-[6px] text-[13px] font-medium'
                )}
              >
                Matrix World Voucher
              </span>
            </div>
            <div className="flex items-center divide-x-[1px] divide-solid divide-[#cccccc]">
              <div className={cn('lg:px-3', 'px-2')}>
                <Image src={ins} />
              </div>
              <div className={cn('lg:px-3', 'px-2')}>
                <Image src={discord} />
              </div>
              <div className={cn('lg:px-3', 'px-2')}>
                <Image src={twitter} />
              </div>
              <div className={cn('lg:px-3', 'px-2')}>
                <Image src={website} />
              </div>
            </div>
          </div>
          <p
            className={cn(
              'pt-3 text-xs leading-[24px] text-[#333333]',
              'lg:pt-5 lg:text-sm lg:leading-6'
            )}
          >
            Matrix World is an open world that enables users to build 3D
            immersive applications on top of several blockchains. In Matrix
            World, users can take advantage of traditional 3D open-world
            features such as building 3D architectures, hosting virtual
            meetings, exhibiting NFTs, and more advanced functionality such as
            creating their own 3D decentralized applications (DApps) using
            Matrix&apos;s built-in computational resources.
          </p>
        </div>
      </div>
      <div
        className={cn(
          'divide-y-[1px] divide-solid divide-[#dddddd]',
          'lg:mt-[45px]',
          'mt-5'
        )}
      >
        <h2 className="pb-[10px] text-[#666666]">
          <Image src={others} />
          <span className="pl-[12px]">
            {t('COLLECTION_NFT_TAB_DETAIL_OTHERS')}
          </span>
        </h2>
        <div className="pt-[12px]">
          {othersInfo.map((item, index) => (
            <div key={index} className="flex justify-between py-[8px]">
              <span className="text-sm text-[#333333]">{item.title}</span>
              <span className="text-themeGreen">{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
