import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import circleImg from '@/assets/images/collection/circle.png';
import collectionIcon from '@/assets/images/collection/collectionIcon.png';
import addressTypeImg from '@/assets/images/collection/ethereum.svg';
import { Button, Tabs } from '@/components';
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
      ...(await serverSideTranslations(locale || '', ['menu', 'common']))
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

function AccountId(props: accountIdProps) {
  const { className } = props;

  return (
    <>
      <NextSeo title="seo title" description="seo description" />
      <div className={cn(styles.accountId, className)}>
        <div
          className="h-[220px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${profileData.background}')` }}
        ></div>
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
                  title: 'test1',
                  element: <div>test1</div>
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
