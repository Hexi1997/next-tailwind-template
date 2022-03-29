import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import circleImg from '@/assets/images/collection/circle.png';
import addressTypeImg from '@/assets/images/collection/ethereum.svg';
import { Button } from '@/components/Common/Button';
import { RoundedContainer } from '@/components/RoundedContainer';
import { ICollectionDetail } from '@/pages/collection/[collectionId]';
import { ellipseAddress } from '@/utils/common';

import styles from './CollectionDetailHeader.module.scss';
import { MobileStatisticsBar } from './MobileStatisticsBar';
import { StatisticsBar } from './StatisticsBar';

interface CollectionDetailHeaderProps {
  className?: string;
  data: ICollectionDetail;
}

export function CollectionDetailHeader(props: CollectionDetailHeaderProps) {
  const { className, data } = props;

  return (
    <div className={cn(styles.CollectionDetailHeader, className, 'relative')}>
      {/* collection icon区域 */}
      <div className="relative ml-[calc((100vw_-_360px)_/_2)] -mt-10 flex w-[320px] flex-col items-center justify-center sm:ml-[calc((100vw_-_600px)_/_2)] sm:w-[600px] lg:left-0 lg:ml-0 lg:block lg:w-auto">
        <div className="relative h-20 w-20 rounded-full bg-red-400">
          <Image src={circleImg} width="80" height="80" />
          <div className="absolute left-[5px] top-[5px] h-[70px] w-[70px] rounded-full">
            <Image src={data.icon} layout="responsive" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <span className="text-[26px] text-[#333333] lg:mr-5">
            {data.name}
          </span>
          <Button type="Address" className="px-4 py-1 !text-sm !shadow-none">
            <div className="flex items-center">
              <Image src={addressTypeImg} width="14" height="18" />
              <span className="ml-2">{ellipseAddress(data.address)}</span>
            </div>
          </Button>
        </div>
        <div className="mt-[11px] mb-[5px]">
          <span className="text-[#666666]">Create by</span>
          <span className="ml-3 cursor-pointer text-themeGreen">
            {data.createBy}
          </span>
        </div>
        <MobileStatisticsBar data={data} />
        <p className="text-sm leading-6 text-[#666666]">{data.desc}</p>
        <StatisticsBar data={data} />
      </div>
    </div>
  );
}
