import cn from 'classnames';
import Image from 'next/image';

import circleImg from '@/assets/images/home/circle.svg';

import { Button } from '../Common/Button';
import { ICollectionRank } from '../Pages/Home/SectionTopCollectionsOneDay';
import styles from './TopRank.module.scss';

interface TopRankProps {
  className?: string;
  data: ICollectionRank;
}

export function TopRank(props: TopRankProps) {
  const { className, data } = props;

  return (
    <div className={cn(styles.TopRank, className)}>
      <Button type="Default" className="relative h-16 w-[316px] !rounded-full">
        <div className="absolute -left-4 top-1">
          <Image src={data.icon} width="56" height="56" />
          <div className="absolute -left-2 -top-2 h-[73px] w-[73px]">
            <Image src={circleImg} width="73" height="73" />
          </div>
          <div className="absolute -left-3 -top-1  h-[26px] w-[26px] rounded-full bg-white text-center leading-[26px] text-themeGreen shadow-md">
            {data.rank}
          </div>
        </div>
        <div className="absolute left-16 top-0 flex h-16 w-[232px] flex-col justify-center space-y-1 text-left">
          <span className="text-xl font-medium line-clamp-1 hover:font-bold">
            {data.name}
          </span>
          <span className="text-sm text-[#66666699] line-clamp-1">
            {data.sales}
          </span>
        </div>
      </Button>
    </div>
  );
}
