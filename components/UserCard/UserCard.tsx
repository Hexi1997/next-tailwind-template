import cn from 'classnames';
import Image from 'next/image';

import { IUserCard } from '@/pages/result';

import styles from './UserCard.module.scss';

interface UserCardProps {
  className?: string;
  data: IUserCard;
}

export function UserCard(props: UserCardProps) {
  const { className, data } = props;

  return (
    <div
      className={cn(
        styles.UserCard,
        className,
        'relative mx-auto h-[210px] w-[340px] cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl'
      )}
    >
      <Image src={data.bg} width={340} height={126} />
      <div className="absolute bottom-14 left-[142px] flex h-14 w-14 items-center justify-center rounded-full bg-white">
        <Image src={data.icon} width={52} height={52} />
      </div>
      <div className="mt-6 text-center text-[20px] font-medium text-[#333333] line-clamp-1">
        {data.name}
      </div>
    </div>
  );
}
