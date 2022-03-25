import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import hotCollectonImg1 from '@/assets/images/home/hot_collection_2.png';
import hotCollectonImg2 from '@/assets/images/home/hot_collection_3.png';
import hotCollectonImg3 from '@/assets/images/home/hot_collection_4.png';
import hotCollectonImg4 from '@/assets/images/home/hot_collection_5.png';
import userIconImg from '@/assets/images/home/hot_collection_usericon.png';
import { SectionTitle } from '@/components/SectionTitle';

import { HotCollectionCard } from './HotCollectionCard';
import styles from './SectionHotCollections.module.scss';

interface SectionHotCollectionsProps {
  className?: string;
}

export interface IHotCollection {
  price: string;
  name: string;
  icon: StaticImageData;
  img: StaticImageData;
}

const data: IHotCollection[] = [
  {
    name: 'Heart & Sol1 Name to long name to long name to long name to long',
    icon: userIconImg,
    price: '$15.6',
    img: hotCollectonImg1
  },
  {
    name: 'Heart & Sol2',
    icon: userIconImg,
    price: '$5.6',
    img: hotCollectonImg2
  },
  {
    name: 'Heart & Sol3',
    icon: userIconImg,
    price: '$2225.6',
    img: hotCollectonImg3
  },
  {
    name: 'Heart & Sol4',
    icon: userIconImg,
    price: '$25.6',
    img: hotCollectonImg4
  },
  {
    name: 'Heart & Sol5',
    icon: userIconImg,
    price: '$25.66666666666666666666666666666666666666666666666666',
    img: hotCollectonImg1
  }
];

export function SectionHotCollections(props: SectionHotCollectionsProps) {
  const { className } = props;
  const { t } = useTranslation('home');

  return (
    <div className={cn(styles.SectionHotCollections, className)}>
      <SectionTitle className="mb-10">
        {t('HOME_SECTION_HOT_COLLECTIONS')}
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item, index) => (
          <HotCollectionCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
