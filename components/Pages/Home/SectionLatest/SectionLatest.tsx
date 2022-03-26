import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import mockImg1 from '@/assets/images/home/latest_1.png';
import mockImg2 from '@/assets/images/home/latest_2.png';
import mockImg3 from '@/assets/images/home/latest_3.png';
import iconImg from '@/assets/images/home/usericon.png';
import { CollectionListArea } from '@/components/Pages/Collections/CollectionListArea';
import { SectionTitle } from '@/components/SectionTitle';

import styles from './SectionLatest.module.scss';
interface SectionLatestProps {
  className?: string;
}

export interface ICollectionData {
  img: StaticImageData;
  icon: StaticImageData;
  link: string;
  iconLink: string;
  author: string;
  name: string;
  desc: string;
}
export const collectionMockData: ICollectionData[] = [
  {
    img: mockImg1,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd vandalzjdvnd',
    name: 'Heart & Sol Heart & Sol Heart & Sol Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko'
  },
  {
    img: mockImg2,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd',
    name: 'Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko wsbe is a historic collaboration with 100% of the procee peace the world worldhot read irie'
  },
  {
    img: mockImg3,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd',
    name: 'Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko wsbe is a historic collaboration with 100% of the procee peace the world worldhot read irie element from an array and returns that element. This method changes the length of the array.'
  }
];
export function SectionLatest(props: SectionLatestProps) {
  const { className } = props;
  const { t } = useTranslation('home');

  return (
    <div className={cn(styles.SectionLatest, className, 'resetContainer')}>
      <SectionTitle className="mb-10">
        {t('HOME_SECTION_LATEST_TITLE')}
      </SectionTitle>
      <CollectionListArea data={collectionMockData} />
    </div>
  );
}
