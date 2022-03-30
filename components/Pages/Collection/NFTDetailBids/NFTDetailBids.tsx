import cn from 'classnames';
import Image from 'next/image';

import userIconImg from '@/assets/images/home/usericon2.png';

import styles from './NFTDetailBids.module.scss';

interface NFTDetailBidsProps {
  className?: string;
}

const columns = ['price', 'by', 'time'];
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

  return (
    <div className={cn(styles.NFTDetailBids, className)}>
      {/* PC端：表格 */}
      <table className="table w-full">
        <thead>
          {columns.map((item) => (
            <th className="py-[20px] text-base text-[#999999]" key={item}>
              <td>{item}</td>
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="" key={item.id}>
              <td className="pb-[32px] align-middle">
                <div className="text-2xl font-bold">{item.price}</div>
                <div className="text-sm text-[#333333] opacity-50">
                  {item.priceDollar}
                </div>
              </td>
              <td className="pb-[32px] align-middle">
                <Image src={item.avatar} width={28} height={28} />
                <p className="ml-[11px] inline-block translate-y-[-25%]">
                  {item.by}
                </p>
              </td>
              <td className="pb-[32px] align-middle">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
