import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import listing from '@/assets/images/collection/list.svg';
import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import {
  Button,
  Input,
  Modal,
  RoundedContainer,
  Select,
  Tabs
} from '@/components';
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

const itemProperties = [
  {
    id: 1,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  },
  {
    id: 2,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  },
  {
    id: 3,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  },
  {
    id: 4,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  },
  {
    id: 5,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  },
  {
    id: 6,
    type: 'Background',
    content: 'Gray',
    remark: '11.7% Rarity'
  }
];

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
      ...(await serverSideTranslations(locale || '', [
        'common',
        'menu',
        'collection'
      ]))
    }
  };
}

function ItemId(props: itemIdProps) {
  const { className } = props;
  const { IconFont } = useIconFont();
  const { t } = useTranslation('collection');
  const [openBidModal, setOpenBidModal] = useState(false);
  const [openCompleteModal, setOpenCompleteModal] = useState(false);
  const [bidCoin, setBidCoin] = useState(null as unknown as string);
  const [bidCoinUnit, setBidCoinUnit] = useState('Flow');
  const restCoin = 1; // 用户剩余的钱

  const bidCoinOptions = [
    { id: 1, label: 'Flow' },
    { id: 2, label: 'Fusd' }
  ];

  return (
    <>
      <NextSeo
        title={t('COLLECTION_NFT_SEO_TITLE')}
        description={t('COLLECTION_NFT_SEO_DESC')}
      />
      <div
        className={cn(
          styles.itemId,
          'container',
          className,
          'pb-10',
          'lg:flex lg:pt-[60px] lg:pb-[94px]'
        )}
      >
        <div className="lg:flex-[3_0_0%]">
          {/* 移动端：标题放在图片上方 */}
          <div className={cn('lg:hidden', 'mb-10 px-5')}>
            <h4 className="mt-[40px] text-base font-medium text-themeGreen">
              MatrixWorld LandVoucher
            </h4>
            <h1 className="mt-[6px] mb-[45px] text-[28px] font-bold text-[#333333]">
              {itemData.name}
            </h1>
            <div className="flex divide-x-[1px] divide-solid divide-[#eeeeee]">
              <div className={cn('flex flex-col pr-[40px] font-normal')}>
                <span className="text-sm text-[#666666]">
                  {t('COLLECTION_NFT_CREATOR')}
                </span>
                <span className="text-xl text-[#333333]">
                  {itemData.creator}
                </span>
              </div>
              <div className={cn('flex flex-col pl-[40px] font-normal')}>
                <span className="text-sm text-[#666666]">
                  {t('COLLECTION_NFT_OWNER')}
                </span>
                <span className="text-xl text-[#333333]">{itemData.owner}</span>
              </div>
            </div>
          </div>
          <RoundedContainer
            className={cn(
              'lg:block lg:px-[20px] lg:pt-[30px] lg:pb-[47px]',
              'flex flex-col p-5'
            )}
          >
            <div
              className={cn(
                'mb-[20px] flex',
                'lg:justify-end',
                'justify-between'
              )}
            >
              <span className="mr-[20px] flex items-center text-[#666666]">
                <IconFont type="icon-heart" className="pr-[8px] text-[20px]" />
                {itemData.favorCount}
              </span>
              <span className="flex items-center text-[#666666]">
                <IconFont type="icon-eye" className="pr-[8px] text-[20px]" />
                {itemData.watchCount}
              </span>
            </div>
            <Image
              className={cn('lg:m-0', 'shrink')}
              src={itemData.image}
              width="605"
              height="699"
            />
          </RoundedContainer>
          <RoundedContainer
            className={cn('px-[21px] pt-[24px] pb-[47px]', 'mt-[40px]')}
          >
            <h3 className="mb-[20px] text-[22px]">
              {t('COLLECTION_NFT_PROPERTIES')}
            </h3>
            <div
              className={cn(
                'grid',
                'lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-2 lg:gap-y-4',
                'md:grid-cols-2 md:grid-rows-3 md:gap-x-4 md:gap-y-6',
                'gap-y-6'
              )}
            >
              {itemProperties.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[10px] border-[1px] border-solid border-[#cccccc] px-[20px] py-[12px]"
                >
                  <div className="text-sm text-[#666666]">{item.type}</div>
                  <div className="mt-[8px] text-xl text-[#333333]">
                    {item.content}
                  </div>
                  <div className="mt-[8px] text-right text-sm text-[#666666]">
                    {item.remark}
                  </div>
                </div>
              ))}
            </div>
          </RoundedContainer>
        </div>
        <div className="lg:ml-[65px] lg:w-[563px]">
          {/* PC端：标题和图片并排放 */}
          <div className={cn('lg:block', 'hidden')}>
            <h4 className="mt-[40px] text-base font-medium text-themeGreen">
              MatrixWorld LandVoucher
            </h4>
            <h1 className="mt-[6px] mb-[45px] text-[28px] font-bold text-[#333333]">
              {itemData.name}
            </h1>
            <div className="flex divide-x-[1px] divide-solid divide-[#eeeeee]">
              <div className={cn('flex flex-col pr-[40px] font-normal')}>
                <span className="text-sm text-[#666666]">
                  {t('COLLECTION_NFT_CREATOR')}
                </span>
                <span className="text-xl text-[#333333]">
                  {itemData.creator}
                </span>
              </div>
              <div className={cn('flex flex-col pl-[40px] font-normal')}>
                <span className="text-sm text-[#666666]">
                  {t('COLLECTION_NFT_OWNER')}
                </span>
                <span className="text-xl text-[#333333]">{itemData.owner}</span>
              </div>
            </div>
          </div>
          <RoundedContainer className="mt-[50px] divide-y-[1px] divide-solid divide-[#eeeeee] px-[30px] py-[20px]">
            <div className="flex items-center pb-[11px] text-base font-normal text-[#666666]">
              <Image src={listing} width={36} height={36} />
              <span>{t('COLLECTION_NFT_LISTING')}</span>
            </div>
            <div className="pt-[16px] text-2xl font-semibold">
              {itemData.price}
            </div>
          </RoundedContainer>
          <div className="mt-[60px] grid grid-cols-2 grid-rows-1 gap-12">
            <Button
              className="h-[39px] rounded-[39px]"
              onClick={() => setOpenCompleteModal(true)}
            >
              {t('COLLECTION_NFT_BUTTON_BUY')}
            </Button>
            <Button
              className="h-[39px] rounded-[39px]"
              onClick={() => setOpenBidModal(true)}
            >
              {t('COLLECTION_NFT_BUTTON_PLACE_BID')}
            </Button>
          </div>
          <Tabs
            className="mt-[60px]"
            tabs={[
              {
                key: 'bids',
                title: t('COLLECTION_NFT_TAB_BIDS'),
                element: <NFTDetailBids />
              },
              {
                key: 'activities',
                title: t('COLLECTION_NFT_TAB_ACTIVITIES'),
                element: <NFTDetailActivities />
              },
              {
                key: 'details',
                title: t('COLLECTION_NFT_TAB_DETAILS'),
                element: <NFTDetailDetails />
              }
            ]}
          />
        </div>
        {/* 竞标Modal */}
        <Modal
          isOpen={openBidModal}
          onClose={setOpenBidModal}
          title={t('COLLECTION_NFT_MODAL_BID_TITLE')}
        >
          <div className="mb-[20px] flex w-full">
            <Input
              placeholder={t('COLLECTION_NFT_MODAL_BID_PLACEHOLDER')}
              value={bidCoin}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => setBidCoin(e.target.value)}
              style={{
                width: '20rem',
                borderRadius: '18px 0 0 18px',
                borderRight: 'transparent',
                font: '700 20px Inter'
              }}
            />
            <Select
              style={{
                borderRadius: '0 18px 18px 0',
                width: '8rem',
                borderLeft: 'none'
              }}
              options={bidCoinOptions}
            />
          </div>
          <div
            className={cn(
              'text-sm leading-6 text-[#666666]',
              bidCoin && bidCoinUnit ? '' : 'px-[43px] text-center'
            )}
          >
            {bidCoin && bidCoinUnit ? (
              <div>
                <div className="flex items-center justify-between">
                  <span>{t('COLLECTION_NFT_MODAL_BIDING_BALANCE')}</span>
                  <span>0.234 {bidCoinUnit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('COLLECTION_NFT_MODAL_BALANCE')}</span>
                  <span>0.004 {bidCoinUnit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('COLLECTION_NFT_MODAL_SERVICE_FEE')}</span>
                  <span>0.120 {bidCoinUnit}</span>
                </div>
                <div className="mt-[8px] flex items-center justify-between">
                  <span>{t('COLLECTION_NFT_MODAL_TOTAL_PAY')}</span>
                  <span className="text-lg font-bold text-[#333333]">
                    1.789 {bidCoinUnit}
                  </span>
                </div>
                <div className="text-right">$3675.24</div>
              </div>
            ) : (
              <div>{t('COLLECTION_NFT_MODAL_NOTIFICATION')}</div>
            )}
          </div>
          <div className="my-[40px]">
            <Button
              type={
                bidCoin && bidCoinUnit && Number(bidCoin) <= restCoin
                  ? 'Primary'
                  : 'None'
              }
              shadow={false}
              className={cn(
                'h-[40px] w-full rounded-[40px]',
                bidCoin && bidCoinUnit ? '' : 'bg-[#ededed] text-[#333333]',
                Number(bidCoin) <= restCoin
                  ? ''
                  : 'border-[1px] border-solid border-black'
              )}
            >
              {Number(bidCoin) <= restCoin || !bidCoin
                ? t('COLLECTION_NFT_MODAL_BUTTON_BID')
                : t('COLLECTION_NFT_MODAL_BUTTON_ADD_FUND')}
            </Button>
            {Number(bidCoin) > restCoin && (
              <div className="mt-[10px] text-center text-sm font-medium text-[#999999]">
                {t('COLLECTION_NFT_MODAL_WARNING')}
              </div>
            )}
          </div>
        </Modal>
        {/* 交易完成Modal */}
        <Modal
          title={t('COLLECTION_NFT_MODAL_CHECKOUT_TITLE')}
          isOpen={openCompleteModal}
          onClose={setOpenCompleteModal}
        >
          <div className="flex items-center rounded-2xl border-[1px] border-solid border-[#999999] p-2">
            <Image
              src={hotBidsImg1}
              width={90}
              height={90}
              className="rounded-2xl"
            />
            <div className="ml-7">
              <p className="text-sm font-medium text-themeGreen">
                MatrixWorld LandVoucher
              </p>
              <p className="text-xl font-bold text-[#333333]">
                Depressive Hamsyer Rise Root
              </p>
            </div>
          </div>
          <div className="mt-6 text-sm leading-6 text-[#666666]">
            <div className="flex items-center justify-between">
              <span>{t('COLLECTION_NFT_MODAL_BIDING_BALANCE')}</span>
              <span>0.234 {bidCoinUnit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{t('COLLECTION_NFT_MODAL_BALANCE')}</span>
              <span>0.004 {bidCoinUnit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>{t('COLLECTION_NFT_MODAL_SERVICE_FEE')}</span>
              <span>0.120 {bidCoinUnit}</span>
            </div>
            <div className="mt-[8px] flex items-center justify-between">
              <span>{t('COLLECTION_NFT_MODAL_TOTAL_PAY')}</span>
              <span className="text-lg font-bold text-[#333333]">
                1.789 {bidCoinUnit}
              </span>
            </div>
            <div className="text-right">$3675.24</div>
          </div>
          <div className="my-[40px] w-full">
            <Button
              type={Number(bidCoin) <= restCoin ? 'Primary' : 'None'}
              className={cn(
                'h-[40px] w-full rounded-[40px]',
                Number(bidCoin) <= restCoin
                  ? ''
                  : 'border-[1px] border-solid border-black'
              )}
              shadow={false}
            >
              {Number(bidCoin) <= restCoin
                ? t('COLLECTION_NFT_MODAL_BUTTON_CONFIRM')
                : t('COLLECTION_NFT_MODAL_BUTTON_ADD_FUND')}
            </Button>
            {Number(bidCoin) > restCoin && (
              <div className="mt-[10px] text-center text-sm font-medium text-[#999999]">
                {t('COLLECTION_NFT_MODAL_WARNING')}
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ItemId;
