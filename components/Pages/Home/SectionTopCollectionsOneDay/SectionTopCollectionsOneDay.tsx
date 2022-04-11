import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import collectionIconImg from '@/assets/images/home/usericon2.png';
import { Button } from '@/components/Common/Button';
import { TimeStepSelect } from '@/components/Common/TimeStepSelect';
import { SectionTitle } from '@/components/SectionTitle';
import { TopRank } from '@/components/TopRank';

import styles from './SectionTopCollectionsOneDay.module.scss';

interface SectionTopCollectionsOneDayProps {
  className?: string;
}

export interface ICollectionRank {
  rank: number;
  icon: StaticImageData;
  name: string;
  sales: number;
}

const data: ICollectionRank[] = [
  {
    rank: 1,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 2,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 3,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 4,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 5,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 6,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 7,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 8,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  },
  {
    rank: 9,
    icon: collectionIconImg,
    name: 'Heart & Sol',
    sales: 5010.44
  }
];

export function SectionTopCollectionsOneDay(
  props: SectionTopCollectionsOneDayProps
) {
  const { className } = props;
  const { t } = useTranslation('home');
  return (
    <div className={cn(styles.SectionTopCollectionsOneDay, className)}>
      <SectionTitle className="mt-[78px] mb-[45px]">
        <span>{t('HOME_SECTION_TOP_COLLECTION')}</span>
        <TimeStepSelect
          className="hidden sm:block"
          options={[1, 7, 30]}
          defaultIndex={0}
          cb={(value: number) => console.log(value)}
        />
      </SectionTitle>
      <TimeStepSelect
        className="sm:hidden"
        options={[1, 7, 30]}
        defaultIndex={0}
        cb={(value: number) => console.log(value)}
      />
      <div className="grid grid-cols-1 pl-4 sm:pl-0 lg:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((_, index) => {
          const colData = data.slice(index * 3, (index + 1) * 3);
          return (
            <div key={index} className="mx-auto">
              {colData.map((item, index) => (
                <TopRank data={item} key={index} className="mb-10" />
              ))}
            </div>
          );
        })}
      </div>
      {/* TODO: 一期隐藏 */}
      {/* <Button className="mx-auto mt-[44px] mb-[70px] h-[40px] w-[289px] !rounded-full">
        {t('HOME_GO_TO_RANK_BUTTON_TEXT')}
      </Button> */}
    </div>
  );
}
