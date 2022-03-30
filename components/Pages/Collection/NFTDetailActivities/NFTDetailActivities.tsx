import cn from 'classnames';
import Image from 'next/image';

import transfer from '@/assets/images/collection/transfer.svg';

import styles from './NFTDetailActivities.module.scss';

interface NFTDetailActivitiesProps {
  className?: string;
}

const columns = ['', 'price', 'from', 'to', 'time'];
const data = [
  {
    id: 1,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 2,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 3,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 4,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 5,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 6,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 7,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  },
  {
    id: 8,
    type: 'Transfers',
    price: '--',
    from: 'oxehfgu…4fj',
    to: 'oxehfgu…4fj',
    time: '1 hour ago'
  }
];

export function NFTDetailActivities(props: NFTDetailActivitiesProps) {
  const { className } = props;

  return (
    <div className={cn(styles.NFTDetailActivities, className)}>
      {/* PC端：表格 */}
      <table className="table w-full">
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
            <tr
              className={cn(
                'hover:border-[1px] hover:border-solid hover:border-gray-200 hover:shadow-xl'
              )}
              key={item.id}
            >
              <td className="align-middle">
                <Image src={transfer} />
                <div className="ml-[6px] inline-block translate-y-[-50%]">
                  {item.type}
                </div>
              </td>
              <td className="py-[12px] align-middle">{item.price}</td>
              <td className="py-[12px] align-middle">{item.from}</td>
              <td className="py-[12px] align-middle">{item.to}</td>
              <td className="py-[12px] align-middle">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
