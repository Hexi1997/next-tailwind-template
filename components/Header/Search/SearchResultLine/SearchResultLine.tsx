import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ISearchResultLine } from '..';
import styles from './SearchResultLine.module.scss';

interface SearchResultLineProps {
  className?: string;
  data: ISearchResultLine[];
  title: string;
}

export function SearchResultLine(props: SearchResultLineProps) {
  const { className, data, title } = props;

  return (
    <div className={cn(styles.SearchResultLine, className, 'mb-4')}>
      <h1 className="mb-2 text-sm text-[#666]">{title}</h1>
      {data.map((item) => (
        <Link href={item.link} key={item.name}>
          <div className="flex h-10 cursor-pointer items-center  space-x-[10px] rounded-lg p-2 text-[#333] hover:bg-themeGreen hover:text-white">
            <div className="h-7 w-7 flex-shrink-0 rounded-full">
              <Image src={item.img} width={28} height={28} />
            </div>
            <span className="flex-1 text-sm line-clamp-1">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
