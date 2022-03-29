import cn from 'classnames';
import Image from 'next/image';

import listIconImg from '@/assets/images/collection/list.svg';
import mintIconImg from '@/assets/images/collection/mint.svg';
import offerIconImg from '@/assets/images/collection/offer.svg';
import saleIconImg from '@/assets/images/collection/sale.svg';
import transferIconImg from '@/assets/images/collection/transfer.svg';

import styles from './CollectionActivityList.module.scss';

export type ActivityType =
  | 'All'
  | 'List'
  | 'Minted'
  | 'Sale'
  | 'Offer'
  | 'Bids'
  | 'Transfer';

export const ActivityTypeArr = [
  'All',
  'List',
  'Minted',
  'Sale',
  'Bids',
  'Transfer',
  'Offer'
];

export interface IAcitivity {
  type: ActivityType;
  itemName: string;
  price: number;
  quantity: number;
  from: string;
  to: string;
  time: string;
}

const acitivityMockData: IAcitivity[] = [
  {
    type: 'Transfer',
    itemName: 'Matrix Land（140，15）',
    price: 4.5,
    quantity: 1,
    from: 'kitchen',
    to: 'bathroom',
    time: '1 hour ago'
  },
  {
    type: 'Offer',
    itemName: 'Matrix Land（56，15）',
    price: 1.7,
    quantity: 2,
    from: 'kitchen',
    to: 'david',
    time: '2 hour ago'
  },
  {
    type: 'Sale',
    itemName: 'Matrix Land（140，15）',
    price: 4.5,
    quantity: 1,
    from: 'kitchen',
    to: 'bathroom',
    time: '1 hour ago'
  },
  {
    type: 'List',
    itemName: 'Matrix Land（140，15）',
    price: 4.5,
    quantity: 1,
    from: 'kitchen',
    to: 'bathroom',
    time: '1 hour ago'
  },
  {
    type: 'Minted',
    itemName: 'Matrix Land（140，15）',
    price: 4.5,
    quantity: 1,
    from: 'kitchen',
    to: 'bathroom',
    time: '1 hour ago'
  },
  {
    type: 'Transfer',
    itemName: 'Matrix Land（140，15）',
    price: 4.5,
    quantity: 1,
    from: 'kitchen',
    to: 'bathroom',
    time: '1 hour ago'
  }
];

interface CollectionActivityListProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getIconByActivityType(type: ActivityType): any {
  switch (type) {
    case 'Transfer':
      return transferIconImg;
      break;
    case 'List':
      return listIconImg;
      break;
    case 'Minted':
      return mintIconImg;
      break;
    case 'Offer':
      return offerIconImg;
      break;
    case 'Sale':
      return saleIconImg;
      break;
    default:
      return transferIconImg;
      break;
  }
}

export function CollectionActivityList(props: CollectionActivityListProps) {
  const { className } = props;

  return (
    <div className={cn(styles.CollectionActivityList, className)}>
      {/* pc端 */}
      <table className="mb-10 hidden w-full lg:table">
        <thead className="h-[44px] text-[#999]">
          <th>
            <td className="select-none text-white">no title</td>
          </th>
          <th>
            <td>items</td>
          </th>
          <th>
            <td>price</td>
          </th>
          <th>
            <td>quantity</td>
          </th>
          <th>
            <td>from</td>
          </th>
          <th>
            <td>to</td>
          </th>
          <th>
            <td>time</td>
          </th>
        </thead>
        <tbody>
          {acitivityMockData.map((item, index) => (
            <tr
              key={index}
              className="h-[74px] overflow-hidden hover:border-[1px] hover:border-solid hover:border-gray-200 hover:shadow-xl"
            >
              <td className="flex px-4 text-sm text-[#333333]">
                <div className="mt-4 mr-2">
                  <Image
                    src={getIconByActivityType(item.type)}
                    width={36}
                    height={38}
                  />
                </div>
                <span className="mt-6">{item.type}</span>
              </td>
              <td className="align-middle text-sm text-[#333333]">
                {item.itemName}
              </td>
              <td className="align-middle text-sm text-[#333333]">
                {item.price}
              </td>
              <td className="align-middle text-sm text-[#333333]">
                {item.quantity}
              </td>
              <td className="align-middle text-sm text-[#333333]">
                {item.from}
              </td>
              <td className="align-middle text-sm text-[#333333]">{item.to}</td>
              <td className="align-middle text-sm text-[#333333]">
                {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 移动端 */}
      <div className="lg:hidden">
        {acitivityMockData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between border-b-[1px] border-solid border-gray-200 px-5 py-4 sm:flex-row sm:items-center"
          >
            <div className="text-sm text-[#333]">
              <div className="flex items-center">
                <span className="line-clamp-1">{item.itemName}</span>
                <span>{item.type}</span>
                <Image
                  src={getIconByActivityType(item.type)}
                  width={36}
                  height={38}
                />
              </div>
              <div className="flex flex-row flex-wrap items-center space-x-1">
                <span>
                  <span>from</span>{' '}
                  <span className="text-themeGreen">{item.from} </span>
                </span>
                <span>
                  <span>to</span>
                  <span className="ml-1 text-themeGreen">{item.to}</span>
                </span>
                <span>{item.time}</span>
              </div>
            </div>
            <div className="mt-2 font-bold text-[#333] lg:mt-0">
              {item.price} FLOW
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
