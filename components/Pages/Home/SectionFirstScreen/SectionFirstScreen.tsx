import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import maskImg from '@/assets/images/home/mask.png';
import { Button } from '@/components/Common/Button';

import { ImageSwiper } from './ImageSwiper';
import styles from './SectionFirstScreen.module.scss';
interface SectionFirstScreenProps {
  className?: string;
}

export function SectionFirstScreen(props: SectionFirstScreenProps) {
  const { className } = props;
  const { t } = useTranslation('home');

  return (
    <div
      className={cn(
        styles.SectionFirstScreen,
        className,
        'resetContainer',
        'bg-gradient-to-b from-[#eeffbf72] to-[#e6ffbf00] text-[#333333]'
      )}
    >
      <div className="absolute -left-4 top-0 -z-10 hidden w-96 select-none blur-3xl sm:block">
        <Image src={maskImg} />
      </div>
      <div className="absolute -right-40 -bottom-64 -z-10 hidden w-[500px] rotate-90 select-none overflow-hidden blur-2xl sm:block">
        <Image src={maskImg} />
      </div>
      <div
        className={cn(
          'flex min-h-[calc(100vh_-_64px)] flex-col items-center justify-between lg:flex-row'
        )}
      >
        <div>
          <h1 className="pt-16 text-[32px] font-bold sm:pt-0 sm:text-[52px]">
            {t('HOME_MARKET_NAME')}
          </h1>
          <p className="mt-[9px] mb-[51px] max-w-[670px] text-lg font-medium sm:text-2xl">
            {t('HOME_MARKET_DESC')}
          </p>
          <div className="flex">
            <Link href="/create">
              <Button type="Primary" className="h-9 w-[105px] !rounded-lg">
                {t('HOME_CREATE_BUTTON_TEXT')}
              </Button>
            </Link>
            <Link href="/market">
              <Button
                type="Default"
                className="ml-[14px] h-9 w-[105px] !rounded-lg"
              >
                {t('HOME_MARKET_BUTTON_TEXT')}
              </Button>
            </Link>
          </div>
        </div>
        <ImageSwiper />
      </div>
    </div>
  );
}
