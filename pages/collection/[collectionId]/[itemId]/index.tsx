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
  Collapse,
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
import { ellipseAddress } from '@/utils/common';
import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './_index.module.scss';

const itemData = {
  image: hotBidsImg1,
  favorCount: 169,
  watchCount: 1357,
  name: 'Matrix Land(12,57)',
  creator: 'Matrixlabs',
  owner: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
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
          'pb-7',
          'lg:flex lg:pt-[60px] lg:pb-[94px]'
        )}
      >
        <div className="lg:flex-[3_0_0%]">
          {/* PC端：左右布局，图片在左侧 */}
          <RoundedContainer
            className={cn(
              'lg:block lg:px-[20px] lg:pt-[30px] lg:pb-[47px]',
              'hidden'
            )}
          >
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
            <Image
              className="m-0"
              src={itemData.image}
              width="605"
              height="699"
            />
          </RoundedContainer>
          <RoundedContainer
            className={cn(
              'lg:mt-[40px] lg:block lg:px-[21px] lg:pt-[24px] lg:pb-[47px]',
              'hidden'
            )}
          >
            <h3 className="mb-[20px] text-[22px]">
              {t('COLLECTION_NFT_PROPERTIES')}
            </h3>
            <div
              className={cn(
                'grid',
                'xl:grid-cols-3 xl:grid-rows-2 xl:gap-x-2 xl:gap-y-4',
                'lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-4 lg:gap-y-6'
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
          <h4
            className={cn(
              'font-medium text-themeGreen',
              'lg:mt-[40px] lg:text-base',
              'mt-[18px] text-sm'
            )}
          >
            MatrixWorld LandVoucher
          </h4>
          <h1
            className={cn(
              'font-bold text-[#333333]',
              'lg:mt-[6px] lg:mb-[45px] lg:text-[28px]',
              'mt-[5px] text-lg'
            )}
          >
            {itemData.name}
          </h1>
          {/* 移动端：图片在标题和介绍中间 */}
          <RoundedContainer
            className={cn('lg:hidden', 'mt-4 block w-full p-3')}
          >
            <div className="mb-5 flex justify-end">
              <span className="mr-5 flex items-center text-[#cccccc]">
                <IconFont type="icon-heart" className="pr-2 text-xl" />
                {itemData.favorCount}
              </span>
              <span className="flex items-center text-[#cccccc]">
                <IconFont type="icon-eye" className="pr-2 text-xl" />
                {itemData.watchCount}
              </span>
            </div>
            <Image src={itemData.image} />
          </RoundedContainer>
          <div
            className={cn(
              'flex divide-x-[1px] divide-solid divide-[#eeeeee]',
              'lg:mt-0',
              'mt-5'
            )}
          >
            <div className={cn('flex flex-col pr-[40px] font-normal')}>
              <span className="text-sm text-[#666666]">
                {t('COLLECTION_NFT_CREATOR')}
              </span>
              <span className="text-xl text-[#333333]">{itemData.creator}</span>
            </div>
            <div className={cn('flex flex-col pl-[40px] font-normal')}>
              <span className="text-sm text-[#666666]">
                {t('COLLECTION_NFT_OWNER')}
              </span>
              <span className="text-xl text-[#333333]">
                {ellipseAddress(itemData.owner)}
              </span>
            </div>
          </div>
          <RoundedContainer
            className={cn(
              'divide-y-[1px] divide-solid divide-[#eeeeee]',
              'lg:mt-[50px] lg:px-[30px] lg:py-5',
              'mt-4 px-8 py-3'
            )}
          >
            <div
              className={cn(
                'flex items-center pb-3 font-normal text-[#666666]',
                'lg:text-base',
                'text-sm'
              )}
            >
              <div className={cn('lg:h-9 lg:w-9', 'h-6 w-6')}>
                <Image src={listing} />
              </div>

              <span>{t('COLLECTION_NFT_LISTING')}</span>
            </div>
            <div
              className={cn('pt-4 font-semibold', 'lg:text-2xl', 'text-base')}
            >
              {itemData.price}
            </div>
          </RoundedContainer>
          <div
            className={cn(
              'grid grid-cols-2 grid-rows-1 gap-12',
              'lg:mt-[60px]',
              'mt-5'
            )}
          >
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
          {/* PC端：tab切换 */}
          <Tabs
            className={cn('hidden', 'lg:mt-[60px] lg:block')}
            tabs={[
              {
                title: t('COLLECTION_NFT_TAB_BIDS'),
                element: <NFTDetailBids />
              },
              {
                title: t('COLLECTION_NFT_TAB_ACTIVITIES'),
                element: <NFTDetailActivities />
              },
              {
                title: t('COLLECTION_NFT_TAB_DETAILS'),
                element: <NFTDetailDetails />
              }
            ]}
          />
          {/* 移动端：若干个展开收缩模块展示 */}
          <Collapse className={cn('lg:hidden', 'mt-2')} title="Properties">
            Properties
          </Collapse>
          <Collapse className={cn('lg:hidden', 'mt-2')} title="Details">
            Details
          </Collapse>
          <Collapse className={cn('lg:hidden', 'mt-2')} title="Activities">
            Activities
          </Collapse>
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
