import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { RoundedContainer } from '@/components/RoundedContainer';
import { ICollectionDetail } from '@/pages/collection/[collectionId]';

import styles from './MobileStatisticsBar.module.scss';

interface MobileStatisticsBarProps {
  className?: string;
  data: ICollectionDetail;
}

export function MobileStatisticsBar(props: MobileStatisticsBarProps) {
  const { className, data } = props;
  const { t } = useTranslation('collection');

  return (
    <div
      className={cn(
        styles.MobileStatisticsBar,
        className,
        'my-4 flex w-full flex-col items-center justify-center lg:hidden'
      )}
    >
      <div className="flex h-[180px] w-[290px] flex-wrap rounded-xl border-[1px] border-solid border-gray-200">
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center border-r-[1px] border-b-[1px] border-solid border-gray-200">
          <span className="mb-1 text-[#999999]">
            {t('COLLECTION_DETAIL_ITEMS')}
          </span>
          <span className="text-[#3333333] text-lg font-bold">
            {data.items}
          </span>
        </div>
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center border-b-[1px] border-solid border-gray-200">
          <span className="mb-1 text-[#999999]">
            {t('COLLECTION_DETAIL_OWNERS')}
          </span>
          <span className="text-[#3333333] text-lg font-bold">
            {data.owners}
          </span>
        </div>
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center border-r-[1px] border-solid border-gray-200">
          <span className="mb-1 text-[#999999]">
            {t('COLLECTION_DETAIL_FLOOR_PRICE')}
          </span>
          <span className="text-[#3333333] text-lg font-bold">
            {data.floor}
          </span>
        </div>
        <div className="flex h-1/2 w-1/2 flex-col items-center justify-center">
          <span className="mb-1 text-[#999999]">
            {t('COLLECTION_DETAIL_VOLUME_TRADED')}
          </span>
          <span className="text-[#3333333] text-lg font-bold">
            {data.volume}
          </span>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        {data.links.map((item) => (
          <a href={item.link} target="_blank" key={item.name} rel="noreferrer">
            <RoundedContainer className="flex h-8 w-8 items-center justify-center rounded-lg border-[1px] border-solid border-gray-200 !shadow-none">
              <Image src={item.icon} width={16} height={16} />
            </RoundedContainer>
          </a>
        ))}
      </div>
    </div>
  );
}
