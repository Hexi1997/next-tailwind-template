import cn from 'classnames';
import Image from 'next/image';

import greenHeart from '@/assets/images/home/green_heart.svg';
import normalHeart from '@/assets/images/home/line_heart.svg';

import { Button } from '../Common/Button';
import { IITem } from '../Pages/Home/SectionHotBids';
import styles from './ItemCard.module.scss';

interface ItemCardProps {
  data: IITem;
  className?: string;
}

export function ItemCard(props: ItemCardProps) {
  const { className, data } = props;

  return (
    <div
      className={cn(
        styles.ItemCard,
        className,
        'mx-auto h-[420px] w-[320px] cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl'
      )}
    >
      <Image src={data.img} width="320" height="312" />
      <div
        className={cn(
          'z-10 -translate-y-16 bg-white px-4 py-2 transition-all duration-300 sm:translate-y-0',
          styles.contentArea
        )}
      >
        <div className="flex items-center justify-between">
          <span className="max-w-[220px] text-xl line-clamp-1">
            {data.name}
          </span>
          <div className="flex items-center space-x-2">
            <Image
              src={data.isLikeByYou ? greenHeart : normalHeart}
              width={data.isLikeByYou ? '26' : '22'}
              className="cursor-pointer hover:opacity-70"
            />
            <span className="text-[#666666]">{data.starCount}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex cursor-pointer items-center hover:opacity-70">
            <div className="overflow-hidden rounded-full">
              <Image src={data.userIcon} width="28" height="28" />
            </div>
            <span className="ml-1 max-w-[150px] text-[#666666] line-clamp-1">
              {data.userName}
            </span>
          </div>
          <span className="font-bold">{data.price}</span>
        </div>
        <Button className="mt-8 h-8 w-full !rounded-full">BUY NOW</Button>
      </div>
    </div>
  );
}
