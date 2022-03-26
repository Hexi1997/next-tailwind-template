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
            className="relative flex justify-center items-center flex-col w-[285px] h-[404px] mx-auto sm:w-[405px] sm:h-[454px]"
          >
            <div className="w-full h-full rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300">
              <Link href={item.link}>
                <Image src={item.img} width="405" height="292" />
              </Link>
              <div className="absolute w-14 h-14 rounded-full bg-white overflow-hidden ml-4 -mt-8">
                <Link href={item.iconLink}>
                  <Image src={item.icon} />
                </Link>
              </div>
              <div className="mt-2 p-4">
                <div className="justify-between items-center mb-4 sm:flex">
                  <h3 className="text-base sm:text-lg font-semibold overflow-hidden line-clamp-1 sm:max-w-[200px]">
                    {item.name}
                  </h3>
                  <Button className="!bg-[#ADD976] px-4 py-1 mt-2 sm:mt-0">
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
