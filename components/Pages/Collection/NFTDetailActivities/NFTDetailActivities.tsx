import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import transfer from '@/assets/images/collection/transfer.svg';
import { ellipseAddress } from '@/utils/common';

import styles from './NFTDetailActivities.module.scss';

interface NFTDetailActivitiesProps {
  className?: string;
}

const data = [
  {
    id: 1,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 2,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 3,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 4,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 5,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 6,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 7,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  },
  {
    id: 8,
    type: 'Transfers',
    price: '--',
    from: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    to: '0x48cc4d3db0b0c0fd60c8a1be73fa96da92fd9009',
    time: '1 hour ago'
  }
];

export function NFTDetailActivities(props: NFTDetailActivitiesProps) {
  const { className } = props;
  const { t } = useTranslation('collection');
  const columns = [
    '',
    t('COLLECTION_NFT_TAB_TABLE_HEADER_PRICE'),
    t('COLLECTION_NFT_TAB_TABLE_HEADER_FROM'),
    t('COLLECTION_NFT_TAB_TABLE_HEADER_TO'),
    t('COLLECTION_NFT_TAB_TABLE_HEADER_TIME')
  ];

  return (
    <div className={cn(styles.NFTDetailActivities, className)}>
      {/* PC端：表格 */}
      <table className={cn('hidden w-full', 'lg:table')}>
        <thead>
          {columns.map((item) => (
            <th key={item}>
              <td
                className={cn(
                  item
                    ? 'pt-[20px] pb-[4px] text-base text-[#999999]'
                    : 'select-none text-white'
                )}
              >
                {item || 'space'}
              </td>
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="align-middle">
                <Image src={transfer} />
                <div className="ml-[6px] inline-block translate-y-[-50%]">
                  {item.type}
                </div>
              </td>
              <td className="py-[12px] align-middle">{item.price}</td>
              <td className="py-[12px] align-middle">
                {ellipseAddress(item.from)}
              </td>
              <td className="py-[12px] align-middle">
                {ellipseAddress(item.to)}
              </td>
              <td className="py-[12px] align-middle">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 移动端：行展示 */}
      <div
        className={cn(
          'lg:hidden',
          'flex flex-col divide-y-[1px] divide-solid divide-[#cccccc]'
        )}
      >
        {data.map((item) => (
          <div
            className="flex flex-wrap items-center justify-between py-2 text-xs"
            key={item.id}
          >
            <span className="flex items-center">
              <Image src={transfer} width="17" />
              <span>{item.type}</span>
            </span>
            <span className="whitespace-nowrap">{item.price}</span>
            <span>
              from
              <span className="text-themeGreen">
                {ellipseAddress(item.from, 4)}
              </span>
              to
              <span className="text-themeGreen">
                {ellipseAddress(item.to, 4)}
              </span>
            </span>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
