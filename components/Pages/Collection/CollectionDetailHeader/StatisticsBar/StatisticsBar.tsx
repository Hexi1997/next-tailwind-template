import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { RoundedContainer } from '@/components/RoundedContainer';
import { ICollectionDetail } from '@/pages/collection/[collectionId]';

import styles from './StatisticsBar.module.scss';

interface StatisticsBarProps {
  className?: string;
  data: ICollectionDetail;
}

export function StatisticsBar(props: StatisticsBarProps) {
  const { className, data } = props;
  const { t } = useTranslation('collection');

  return (
    <div className={cn(styles.StatisticsBar, className)}>
      {/* collection 统计区域 PC端 */}
      <RoundedContainer className="absolute right-0 -mt-[277px] hidden h-[175px] w-[554px] flex-col justify-center  !rounded-2xl px-10 py-9 lg:flex">
        <div className="mb-4 flex items-center justify-between space-x-[60px] border-b-2 border-solid border-b-gray-200 pb-2">
          <div>
            <span className="text-[#999999]">
              {t('COLLECTION_DETAIL_ITEMS')}
            </span>
            <br />
            <span className="font-bold text-[#333333]">{data.items}</span>
          </div>
          <div>
            <span className="text-[#999999]">
              {t('COLLECTION_DETAIL_OWNERS')}
            </span>
            <br />
            <span className="font-bold text-[#333333]">{data.owners}</span>
          </div>
          <div>
            <span className="text-[#999999]">
              {t('COLLECTION_DETAIL_FLOOR_PRICE')}
            </span>
            <br />
            <span className="font-bold text-[#333333]">{data.floor}</span>
          </div>
          <div>
            <span className="text-[#999999]">
              {t('COLLECTION_DETAIL_VOLUME_TRADED')}
            </span>
            <br />
            <span className="font-bold text-[#333333]">{data.volume}</span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-5">
          {data.links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-[1px] border-solid border-gray-200 shadow-md hover:shadow-xl">
                <Image src={item.icon} title={item.name} />
              </div>
            </a>
          ))}
        </div>
      </RoundedContainer>
    </div>
  );
}
