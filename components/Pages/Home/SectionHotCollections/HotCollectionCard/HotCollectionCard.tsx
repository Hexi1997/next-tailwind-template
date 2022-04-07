import cn from 'classnames';
import Image from 'next/image';

import { IHotCollection } from '../SectionHotCollections';
import styles from './HotCollectionCard.module.scss';

interface HotCollectionCardProps {
  className?: string;
  data: IHotCollection;
}

export function HotCollectionCard(props: HotCollectionCardProps) {
  const { className, data } = props;

  return (
    <div
      className={cn(
        styles.HotCollectionCard,
        className,
        'relative mx-auto mb-8 h-[263px] w-[232px] cursor-pointer rounded-[16px] shadow-lg transition-all duration-300 hover:shadow-2xl'
      )}
    >
      <Image src={data.img} width="232" height="167" />
      <div className="absolute bottom-[67px] right-5 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white">
        <Image src={data.icon} width="48" height="48" />
      </div>
      <div className="p-5">
        <div className="font-medium text-[#999999] line-clamp-1">
          {data.price}
        </div>
        <div className="mt-1 text-xl font-medium line-clamp-1">{data.name}</div>
      </div>
    </div>
  );
}
