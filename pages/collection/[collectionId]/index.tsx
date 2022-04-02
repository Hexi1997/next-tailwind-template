import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';

import collectionIcon from '@/assets/images/collection/collectionIcon.png';
import discordIcon from '@/assets/images/collection/discord.svg';
import insIcon from '@/assets/images/collection/ins.svg';
import twitterIcon from '@/assets/images/collection/twitter.svg';
import websiteIcon from '@/assets/images/collection/website.svg';
import { Tabs } from '@/components/Common/Tabs';
import { CollectionDetailActivities } from '@/components/Pages/Collection/CollectionDetailActivities';
import { CollectionDetailHeader } from '@/components/Pages/Collection/CollectionDetailHeader';
import { CollectionDetailItems } from '@/components/Pages/Collection/CollectionDetailItems';

import styles from './_index.module.scss';

interface collectionIdProps {
  className?: string;
}

export async function getServerSideProps({
  locale
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'menu',
        'collection'
      ]))
    }
  };
}

interface ISocialLink {
  name: string;
  link: string;
  icon: StaticImageData;
}

export interface ICollectionDetail {
  name: string;
  address: string;
  createBy: string;
  desc: string;
  items: number;
  owners: number;
  floor: number;
  volume: number;
  bg: string;
  icon: StaticImageData;
  links: ISocialLink[];
}

const collectionDetailMockData: ICollectionDetail = {
  name: 'Heart & Sol',
  address: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
  createBy: 'Doodles_llc',
  desc: `Matrix World is an open world that enables users to build 3D immersive applications on top of several blockchains. In Matrix World, users can take advantage of traditional 3D open-world features such as building 3D architectures, hosting virtual meetings, exhibiting NFTs, and more advanced functionality such as creating their own 3D decentralized applications (DApps) using Matrix's built-in computational resources.`,
  items: 1800,
  owners: 1100,
  floor: 1.266,
  volume: 2000,
  bg: 'https://s1.ax1x.com/2022/03/29/qyZoWV.png',
  icon: collectionIcon,
  links: [
    {
      name: 'ins',
      link: 'https://www.instagram.com',
      icon: insIcon
    },
    {
      name: 'discord',
      link: 'https://www.discord.com',
      icon: discordIcon
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com',
      icon: twitterIcon
    },
    {
      name: 'website',
      link: 'https://www.website.com',
      icon: websiteIcon
    }
  ]
};

function CollectionId(props: collectionIdProps) {
  const { className } = props;
  const { t } = useTranslation('collection');

  return (
    <>
      <NextSeo
        title={t('COLLECTION_PAGE_SEO_TITLE')}
        description={t('COLLECTION_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.collectionId, className)}>
        <div
          className={cn('h-[220px] w-full bg-cover bg-center')}
          style={{ backgroundImage: `url('${collectionDetailMockData.bg}')` }}
        ></div>
        <div className="container">
          <CollectionDetailHeader data={collectionDetailMockData} />
          <Tabs
            className="xl:mt-18 mt-2 sm:mt-4 lg:mt-6"
            tabs={[
              {
                key: 'items',
                title: t('COLLECTION_DETAIL_TAB_ITEMS'),
                element: <CollectionDetailItems />
              },
              {
                key: 'activities',
                title: t('COLLECTION_DETAIL_TAB_ACTIVITIES'),
                element: <CollectionDetailActivities />
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default CollectionId;
