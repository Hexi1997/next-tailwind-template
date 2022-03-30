import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import collectionListing from '@/assets/images/collection/collectionListing.png';
import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import { Button, RoundedContainer, Tabs } from '@/components';
import {
  NFTDetailActivities,
  NFTDetailBids,
  NFTDetailDetails
} from '@/components/Pages';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './_index.module.scss';

const itemData = {
  image: hotBidsImg1,
  favorCount: 169,
  watchCount: 1357,
  name: 'Matrix Land(12,57)',
  creator: 'Matrixlabs',
  owner: '0xa9eac9ffc…E0d1',
  price: '5flow'
};

interface itemIdProps {
  className?: string;
}

export async function getServerSideProps({
  locale
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'menu']))
    }
  };
}

function ItemId(props: itemIdProps) {
  const { className } = props;
  const { IconFont } = useIconFont();

  return (
    <>
      <NextSeo title="seo title" description="seo description" />
      <div
        className={cn(
          styles.itemId,
          'container',
          className,
          'pt-[60px] pb-[94px]',
          'lg:flex'
        )}
      >
        <div>
          <RoundedContainer className={cn('px-[20px] pt-[30px] pb-[47px]')}>
            <div className="mb-[20px] flex justify-end">
              <span className="mr-[20px] flex items-center text-[#666666]">
                <IconFont type="icon-heart" className="pr-[8px] text-[20px]" />
                {itemData.favorCount}
              </span>
              <span className="flex items-center text-[#666666]">
                <IconFont type="icon-eye" className="pr-[8px] text-[20px]" />
                {itemData.watchCount}
              </span>
            </div>
            <Image src={itemData.image} width="605" height="699" />
          </RoundedContainer>
          <RoundedContainer
            className={cn('px-[21px] pt-[24px] pb-[47px]', 'lg:mt-[40px]')}
          >
            <h3>Properties</h3>
            <div>
              <div>
                <div>Background</div>
                <div>Gray</div>
                <div>11.7% Rarity</div>
              </div>
            </div>
          </RoundedContainer>
        </div>
        <div className="ml-[65px] w-[563px]">
          <h4 className="mt-[40px] text-base font-medium text-[#03D34A]">
            MatrixWorld LandVoucher
          </h4>
          <h1 className="mt-[6px] mb-[45px] text-[28px] font-bold text-[#333333]">
            {itemData.name}
          </h1>
          <div className="flex divide-x-[1px] divide-solid divide-[#eeeeee]">
            <div className={cn('flex flex-col pr-[40px] font-normal')}>
              <span className="text-sm text-[#666666]">Creator</span>
              <span className="text-xl text-[#333333]">{itemData.creator}</span>
            </div>
            <div className={cn('flex flex-col pl-[40px] font-normal')}>
              <span className="text-sm text-[#666666]">Owner</span>
              <span className="text-xl text-[#333333]">{itemData.owner}</span>
            </div>
          </div>
          <RoundedContainer className="mt-[50px] divide-y-[1px] divide-solid divide-[#eeeeee] px-[30px] py-[20px]">
            <div className="pb-[11px] text-base font-normal text-[#666666]">
              <Image src={collectionListing} />
              Listing
            </div>
            <div className="pt-[16px] text-2xl font-semibold">
              {itemData.price}
            </div>
          </RoundedContainer>
          <div className="mt-[60px] grid grid-cols-2 grid-rows-1 gap-12">
            <Button className="h-[39px] rounded-[20px]">Buy</Button>
            <Button className="h-[39px] rounded-[20px]">Place A Bid</Button>
          </div>
          <Tabs
            className="mt-[60px]"
            tabs={[
              {
                title: 'Bids',
                element: <NFTDetailBids />
              },
              {
                title: 'Activities',
                element: <NFTDetailActivities />
              },
              {
                title: 'Details',
                element: <NFTDetailDetails />
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default ItemId;
