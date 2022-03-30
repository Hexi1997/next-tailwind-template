import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/Common/Button';

import { ICollectionData } from '../../Home/SectionLatest/SectionLatest';
import styles from './CollectionListArea.module.scss';

interface CollectionCardProps {
  className?: string;
  data: ICollectionData[];
}

export function CollectionListArea(props: CollectionCardProps) {
  const { className, data } = props;

  return (
    <div className={cn(styles.CollectionListArea, className)}>
      <div
        className={cn(
          'grid grid-cols-1 grid-rows-3 gap-8 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 xl:gap-8'
        )}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="relative mx-auto flex h-[404px] w-[285px] flex-col items-center justify-center sm:h-[454px] sm:w-[405px]"
          >
            <div className="h-full w-full cursor-pointer rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
              <Link href={item.link}>
                <Image src={item.img} width="405" height="292" />
              </Link>
              <div className="absolute ml-4 -mt-8 h-14 w-14 overflow-hidden rounded-full bg-white">
                <Link href={item.iconLink}>
                  <Image src={item.icon} />
                </Link>
              </div>
              <div className="mt-2 p-4">
                <div className="mb-4 items-center justify-between sm:flex">
                  <h3 className="overflow-hidden text-base font-semibold line-clamp-1 sm:max-w-[200px] sm:text-lg">
                    {item.name}
                  </h3>
                  <Button className="mt-2 !bg-[#ADD976] px-4 py-1 !shadow-none sm:mt-0">
                    <div className="w-40 line-clamp-1">{item.author}</div>
                  </Button>
                </div>
                <p className="line-clamp-3">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
