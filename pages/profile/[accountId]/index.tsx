import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import circleImg from '@/assets/images/collection/circle.png';
import collectionIcon from '@/assets/images/collection/collectionIcon.png';
import addressTypeImg from '@/assets/images/collection/ethereum.svg';
import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import hotBidsImg2 from '@/assets/images/home/hot_bids_3.png';
import hotBidsImg3 from '@/assets/images/home/hot_bids_4.png';
import hotBidsImg4 from '@/assets/images/home/hot_bids_5.png';
import hotBidsImg5 from '@/assets/images/home/hot_bids_6.png';
import userIconImg from '@/assets/images/home/usericon2.png';
import editIcon from '@/assets/images/profile/edit.svg';
import { Button, Tabs } from '@/components';
import { ProfileList } from '@/components/Pages';
import { ellipseAddress } from '@/utils/common';

import styles from './_index.module.scss';

interface accountIdProps {
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
        'menu',
        'common',
        'selection',
        'category',
        'profile'
      ]))
    }
  };
}

const profileData = {
  background: 'https://s1.ax1x.com/2022/03/29/qyZoWV.png',
  avatar: collectionIcon,
  addressType: addressTypeImg,
  address: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
  name: 'Unnamed'
};

const profileListData = [
  {
    id: 1,
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）Long name long name',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 16,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    id: 2,
    img: hotBidsImg2,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 26,
    isLikeByYou: false,
    price: '1.00 FLOW'
  },
  {
    id: 3,
    img: hotBidsImg3,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 0,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    id: 4,
    img: hotBidsImg4,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 1000,
    isLikeByYou: true,
    price: '10000.00 FLOW'
  },
  {
    id: 5,
    img: hotBidsImg5,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 120,
    isLikeByYou: true,
    price: '10.00 FLOW'
  },
  {
    id: 6,
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 3,
    isLikeByYou: false,
    price: '2.00 FLOW'
  }
];

function AccountId(props: accountIdProps) {
  const { className } = props;
  const { t } = useTranslation('profile');
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={t('PROFILE_SEO_TITLE')}
        description={t('PROFILE_SEO_DESC')}
      />
      <div className={cn(styles.accountId, className)}>
        <div
          className="relative h-[220px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${profileData.background}')` }}
        >
          <Button
            type="Default"
            className="absolute top-[28px] right-[75px] py-[10px] px-[25px]"
            onClick={() => router.push('/profile/setting')}
          >
            <Image src={editIcon} />
            <span className="pl-[6px]">{t('PROFILE_BUTTON_EDIT')}</span>
          </Button>
        </div>
        <div className="container relative top-[-40px]">
          <div className="relative rounded-full">
            <Image src={circleImg} width={80} height={80} />
            <div className="absolute top-[5px] left-[5px]">
              <Image src={profileData.avatar} width={70} height={70} />
            </div>
          </div>
          <div className={cn('flex flex-col items-center', 'lg:flex-row')}>
            <span className="text-[26px] text-[#333333] lg:mr-5">
              {profileData.name}
            </span>
            <Button type="Address" className="px-4 py-1 !text-sm !shadow-none">
              <div className="flex items-center">
                <Image src={profileData.addressType} width="14" height="18" />
                <span className="ml-2">
                  {ellipseAddress(profileData.address)}
                </span>
              </div>
            </Button>
          </div>
          <div className="mt-[70px]">
            <Tabs
              tabs={[
                {
                  key: 'onsale',
                  title: t('PROFILE_TAB_ONSALE'),
                  element: <ProfileList data={[]} />
                },
                {
                  key: 'owned',
                  title: t('PROFILE_TAB_OWNED'),
                  element: <ProfileList data={profileListData} />
                },
                {
                  key: 'created',
                  title: t('PROFILE_TAB_CREATED'),
                  element: <ProfileList data={[]} />
                },
                {
                  key: 'favorited',
                  title: t('PROFILE_TAB_FAVORITED'),
                  element: <ProfileList data={[]} />
                },
                {
                  key: 'activities',
                  title: t('PROFILE_TAB_ACTIVITIES'),
                  element: <ProfileList data={[]} />
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountId;
