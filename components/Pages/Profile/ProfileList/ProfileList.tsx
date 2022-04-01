import cn from 'classnames';

import { CategoryList, ItemCard, Select } from '@/components';

import styles from './ProfileList.module.scss';

interface ProfileItem {
  id: number;
  img: any;
  name: string;
  userName: string;
  userIcon: any;
  starCount: number;
  isLikeByYou: boolean;
  price: string;
}
interface ProfileListProps {
  className?: string;
  data: ProfileItem[];
}

export function ProfileList(props: ProfileListProps) {
  const { className, data } = props;
  const categories = [
    { label: 'All' },
    { label: 'Food' },
    { label: 'Minted' },
    { label: 'Stars' },
    { label: 'Music' },
    { label: 'Sports' },
    { label: 'Movies' },
    { label: 'Art' },
    { label: 'Photography' }
  ];
  const selectOptions1 = [
    {
      label: 'Price-Highest',
      id: 1
    },
    {
      label: 'Price-Lowest',
      id: 2
    },
    {
      label: 'Time-Newest',
      id: 3
    }
  ];
  const selectOptions2 = [
    {
      label: 'Add Time Newest',
      id: 1
    },
    {
      label: 'Add Time Oldest',
      id: 2
    }
  ];

  return (
    <div className={cn(styles.ProfileList, className, 'pt-[34px]')}>
      <CategoryList title="Category" categories={categories} value={'All'} />
      <div className={cn('mt-[45px] hidden', 'lg:flex')}>
        <Select
          style={{ width: '200px', marginRight: '36px' }}
          options={selectOptions1}
        />
        <Select style={{ width: '200px' }} options={selectOptions2} />
      </div>
      {data.length ? (
        <div
          className={cn(
            'mt-[40px] mb-[172px] grid grid-cols-1 grid-rows-3 gap-x-44 gap-y-8',
            'lg:grid-cols-2 lg:grid-rows-2',
            'xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-44'
          )}
        >
          {data.map((item) => (
            <ItemCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="py-[132px] text-center">
          <p className="font-medium text-[#333333]">No Nft Here</p>
          <p className="mt-4 text-sm text-[#999999]">
            You can go to the market to find something interesting
          </p>
        </div>
      )}
    </div>
  );
}
