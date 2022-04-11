import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { cloneDeep } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { usePrevious } from 'react-use';

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
    link: '/collection/1/1'
  },
  {
    index: 1,
    img: swiperImg2,
    link: '/collection/1/1'
  },
  {
    index: 2,
    img: swiperImg3,
    link: '/collection/1/1'
  },
  {
    index: 3,
    img: swiperImg4,
    link: '/collection/1/1'
  },
  {
    index: 4,
    img: swiperImg5,
    link: '/collection/1/1'
  },
  {
    index: 5,
    img: swiperImg6,
    link: '/collection/1/1'
  }
];

export function ImageSwiper(props: ImageSwiperProps) {
  const { className } = props;
  const [imgs, setImgs] = useState<IData[]>(defaultImgs);
  const [currentImageIndex, setCurrentImgIndex] = useState(0);
  const [isAutoSwiper, setIsAutoSwiper] = useState(true);
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImgIndex((prev) => (prev + 1 > imgs.length ? 0 : prev + 1));
    const imgsNew = cloneDeep(imgs);
    const first = imgsNew.shift();
    if (first) {
      imgsNew.push(first);
      setImgs(imgsNew);
    }
  }, [imgs]);

  useEffect(() => {
    if (second % 5 === 0 && second !== 0 && isAutoSwiper) {
      handleNext();
      setSeconds(0);
    }
  }, [handleNext, isAutoSwiper, second]);

  const handlePrev = useCallback(() => {
    setCurrentImgIndex((prev) => (prev - 1 < 0 ? imgs.length : prev - 1));
    const imgsNew = cloneDeep(imgs);
    const last = imgsNew.pop();
    if (last) {
      imgsNew.unshift(last);
      setImgs(imgsNew);
    }
  }, [imgs]);

  return (
    <div
      className={cn(styles.ImageSwiper, className, 'ml-2 pr-4 sm:ml-0 lg:mr-6')}
    >
      <div
        className={cn(
          styles.cardContainer,
          'h-60 w-60 sm:h-[385px] sm:w-[385px]'
        )}
      >
        <div
          className={cn(styles.controller, styles.right)}
          onClick={() => {
            setIsAutoSwiper(false);
            handleNext();
          }}
        >
          <ArrowRightOutlined className="absolute -right-12 top-4 cursor-pointer text-4xl text-black opacity-75 hover:opacity-95" />
        </div>
        <div
          className={cn(styles.controller, styles.left)}
          onClick={() => {
            setIsAutoSwiper(false);
            handlePrev();
          }}
        >
          <ArrowLeftOutlined className="absolute -left-12 top-4 cursor-pointer text-4xl text-black opacity-75 hover:opacity-95" />
        </div>
        {/* <div
          className={`absolute -bottom-4 z-[200] flex w-full items-center justify-center space-x-3`}
        >
          {imgs.map((item, index) => (
            <div
              key={index}
              className="box-border h-3 w-3 rounded-full bg-black p-2"
              onClick={() => {
                setCurrentImgIndex(item.index);
              }}
            ></div>
          ))}
        </div> */}
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
