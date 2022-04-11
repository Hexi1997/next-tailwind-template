import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import userIconImg from '@/assets/images/home/usericon2.png';
import { ellipseAddress } from '@/utils/common';

import styles from './NFTDetailBids.module.scss';

interface NFTDetailBidsProps {
  className?: string;
}

const data = [
  {
    id: 1,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 2,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 3,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 4,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 5,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 6,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 7,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 8,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago',
    avatar: userIconImg
  }
];

export function NFTDetailBids(props: NFTDetailBidsProps) {
  const { className } = props;
  const { t } = useTranslation('collection');

  const columns = [
    t('COLLECTION_NFT_TAB_TABLE_HEADER_PRICE'),
    t('COLLECTION_NFT_TAB_TABLE_HEADER_BY'),
    t('COLLECTION_NFT_TAB_TABLE_HEADER_TIME')
  ];

  return (
    <div className={cn(styles.NFTDetailBids, className, 'lg:p-0', 'py-6 px-5')}>
      {/* 移动端：展示标题 */}
      <div
        className={cn('lg:hidden', 'text-base font-semibold text-[#333333]')}
      >
        {t('COLLECTION_NFT_TAB_BIDS')}
      </div>
      <table className="table w-full">
        <thead>
          {columns.map((item) => (
            <th
              className={cn(
                'text-[#999999]',
                'lg:pt-5 lg:pb-1 lg:text-base',
                'pt-2'
              )}
              key={item}
            >
              <td>{item}</td>
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-4 align-middle">
                <div
                  className={cn(
                    'lg:text-2xl lg:font-bold',
                    'text-sm font-normal'
                  )}
                >
                  {item.price}
                </div>
                {/* 移动端：不展示其他币种价格 */}
                <div
                  className={cn(
                    'lg:block lg:text-sm lg:text-[#333333] lg:opacity-50',
                    'hidden'
                  )}
                >
                  {item.priceDollar}
                </div>
              </td>
              <td className="align-middle">
                <div className={cn('lg:inline-block', 'hidden')}>
                  <Image src={item.avatar} width={28} height={28} />
                </div>
                <div className={cn('lg:hidden', 'inline-block')}>
                  <Image src={item.avatar} width={16} height={16} />
                </div>
                <div
                  className={cn(
                    'inline-block',
                    'lg:ml-3 lg:translate-y-[-25%]',
                    'ml-2'
                  )}
                >
                  {ellipseAddress(item.by, 4)}
                </div>
              </td>
              <td className="align-middle">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
