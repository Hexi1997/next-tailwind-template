import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import mockImg1 from '@/assets/images/home/latest_1.png';
import mockImg2 from '@/assets/images/home/latest_2.png';
import mockImg3 from '@/assets/images/home/latest_3.png';
import iconImg from '@/assets/images/home/usericon.png';
import { Button } from '@/components/Common/Button';
import { SectionTitle } from '@/components/SectionTitle';

import styles from './SectionLatest.module.scss';
interface SectionLatestProps {
  className?: string;
}

const data = [
  {
    img: mockImg1,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd vandalzjdvnd',
    name: 'Heart & Sol Heart & Sol Heart & Sol Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko'
  },
  {
    img: mockImg2,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd',
    name: 'Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko wsbe is a historic collaboration with 100% of the procee peace the world worldhot read irie'
  },
  {
    img: mockImg3,
    icon: iconImg,
    link: '/',
    iconLink: '/',
    author: 'by vandalzjdvnd',
    name: 'Heart & Sol',
    desc: 'Vandalz for ukraine:wladimir klitschko wsbe is a historic collaboration with 100% of the procee peace the world worldhot read irie element from an array and returns that element. This method changes the length of the array.'
  }
];
export function SectionLatest(props: SectionLatestProps) {
  const { className } = props;
  const { t } = useTranslation('home');

  return (
    <div className={cn(styles.SectionLatest, className, 'resetContainer')}>
      <SectionTitle className="mb-10">
        {t('HOME_SECTION_LATEST_TITLE')}
      </SectionTitle>
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
