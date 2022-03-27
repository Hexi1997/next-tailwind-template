import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import hotBidsImg1 from '@/assets/images/home/hot_bids_2.png';
import hotBidsImg2 from '@/assets/images/home/hot_bids_3.png';
import hotBidsImg3 from '@/assets/images/home/hot_bids_4.png';
import hotBidsImg4 from '@/assets/images/home/hot_bids_5.png';
import hotBidsImg5 from '@/assets/images/home/hot_bids_6.png';
import userIconImg from '@/assets/images/home/usericon2.png';
import { ItemCard } from '@/components/ItemCard';
import { SectionTitle } from '@/components/SectionTitle';

import styles from './SectionHotBids.module.scss';

interface SectionHotBidsProps {
  className?: string;
}

export interface IITem {
  img: StaticImageData;
  name: string;
  userName: string;
  userIcon: StaticImageData;
  starCount: number;
  isLikeByYou: boolean;
  price: string;
}

const data: IITem[] = [
  {
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）Long name long name',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 16,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    img: hotBidsImg2,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 26,
    isLikeByYou: false,
    price: '1.00 FLOW'
  },
  {
    img: hotBidsImg3,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 0,
    isLikeByYou: true,
    price: '1.00 FLOW'
  },
  {
    img: hotBidsImg4,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 1000,
    isLikeByYou: true,
    price: '10000.00 FLOW'
  },
  {
    img: hotBidsImg5,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 120,
    isLikeByYou: true,
    price: '10.00 FLOW'
  },
  {
    img: hotBidsImg1,
    name: 'Matrix Land（140，15）',
    userName: 'Heart & Sol',
    userIcon: userIconImg,
    starCount: 3,
    isLikeByYou: false,
    price: '2.00 FLOW'
  }
];

export function SectionHotBids(props: SectionHotBidsProps) {
  const { className } = props;
  const { t } = useTranslation('home');
  return (
    <div className={cn(styles.SectionHotBids, className)}>
      <SectionTitle className="mt-16 mb-10">
        {t('HOME_SECTION_HOT_BIDS_TITLE')}
      </SectionTitle>
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((item, index) => (
          <ItemCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
