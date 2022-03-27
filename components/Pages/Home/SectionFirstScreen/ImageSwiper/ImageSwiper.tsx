import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { cloneDeep } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import swiperImg1 from '@/assets/images/home/swiper-1.png';
import swiperImg2 from '@/assets/images/home/swiper-2.png';
import swiperImg3 from '@/assets/images/home/swiper-3.jpg';
import swiperImg4 from '@/assets/images/home/swiper-4.jpg';
import swiperImg5 from '@/assets/images/home/swiper-5.png';
import swiperImg6 from '@/assets/images/home/swiper-6.jpeg';

import styles from './ImageSwiper.module.scss';
interface ImageSwiperProps {
  className?: string;
}

interface IData {
  index: number;
  img: StaticImageData;
  link: string;
}
const defaultImgs = [
  {
    index: 0,
    img: swiperImg1,
    link: '/'
  },
  {
    index: 1,
    img: swiperImg2,
    link: '/'
  },
  {
    index: 2,
    img: swiperImg3,
    link: '/'
  },
  {
    index: 3,
    img: swiperImg4,
    link: '/'
  },
  {
    index: 4,
    img: swiperImg5,
    link: '/'
  },
  {
    index: 5,
    img: swiperImg6,
    link: '/'
  }
];

export function ImageSwiper(props: ImageSwiperProps) {
  const { className } = props;
  const [imgs, setImgs] = useState<IData[]>(defaultImgs);
  const [currentImageIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className={cn(styles.ImageSwiper, className, 'pr-4')}>
      <div
        className={cn(
          styles.cardContainer,
          'h-72 w-72 sm:h-[385px] sm:w-[385px]'
        )}
      >
        <div
          className={cn(styles.controller, styles.right)}
          onClick={() => {
            setCurrentImgIndex(
              currentImageIndex + 1 > imgs.length ? 0 : currentImageIndex + 1
            );
            const imgsNew = cloneDeep(imgs);
            const first = imgsNew.shift();
            if (first) {
              imgsNew.push(first);
              setImgs(imgsNew);
            }
          }}
        >
          <ArrowRightOutlined className="absolute right-0 top-4 cursor-pointer text-4xl text-white opacity-75 hover:opacity-95" />
        </div>
        <div
          className={cn(styles.controller, styles.left)}
          onClick={() => {
            setCurrentImgIndex(
              currentImageIndex - 1 < 0 ? imgs.length : currentImageIndex - 1
            );
            const imgsNew = cloneDeep(imgs);
            const last = imgsNew.pop();
            if (last) {
              imgsNew.unshift(last);
              setImgs(imgsNew);
            }
          }}
        >
          <ArrowLeftOutlined className="absolute left-0 top-4 cursor-pointer text-4xl text-white opacity-75 hover:opacity-95" />
        </div>
        <div className={styles.cardHolder}>
          {imgs.map((item) => (
            <div
              key={item.index}
              className={cn(styles.card, 'relative cursor-pointer')}
            >
              <Link href={item.link}>
                <Image src={item.img} width="385" height="385" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
