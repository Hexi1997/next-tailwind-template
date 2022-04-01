import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import userIconImg from '@/assets/images/home/usericon2.png';

import styles from './NFTDetailBids.module.scss';

interface NFTDetailBidsProps {
  className?: string;
}

const data = [
  {
    id: 1,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 2,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 3,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 4,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 5,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 6,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 7,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
    time: '1 hour ago',
    avatar: userIconImg
  },
  {
    id: 8,
    price: '1.42flow',
    priceDollar: '$53332',
    by: '0xa9ea9ffc…E0d1',
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
    <div className={cn(styles.NFTDetailBids, className)}>
      {/* PC端：表格 */}
      <table className={cn('lg:table lg:w-full', 'hidden')}>
        <thead>
          {columns.map((item) => (
            <th
              className="pt-[20px] pb-[4px] text-base text-[#999999]"
              key={item}
            >
              <td>{item}</td>
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className={cn('hover:rounded-xl hover:shadow-xl')}
              key={item.id}
            >
              <td className="py-[16px] align-middle">
                <div className="text-2xl font-bold">{item.price}</div>
                <div className="text-sm text-[#333333] opacity-50">
                  {item.priceDollar}
                </div>
              </td>
              <td className="align-middle">
                <Image src={item.avatar} width={28} height={28} />
                <div className="ml-[11px] inline-block translate-y-[-25%]">
                  {item.by}
                </div>
              </td>
              <td className="align-middle">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 移动端：行排列展示 */}
      <div className={cn('lg:hidden')}> </div>
    </div>
  );
}
