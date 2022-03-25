import cn from 'classnames';
import Image from 'next/image';
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
      <div className="absolute select-none hidden blur-3xl w-96 -left-4 top-0 sm:block -z-10">
        <Image src={maskImg} />
      </div>
      <div className="overflow-hidden select-none blur-2xl -z-10 absolute hidden rotate-90 w-[500px] -right-40 -bottom-64 sm:block">
        <Image src={maskImg} />
      </div>
      <div
        className={cn(
          'flex flex-col justify-between items-center min-h-[calc(100vh_-_64px)] lg:flex-row'
        )}
      >
        <div>
          <h1 className="text-[32px] font-bold sm:text-[52px] pt-16 sm:pt-0">
            {t('HOME_MARKET_NAME')}
          </h1>
          <p className="text-lg max-w-[670px] mt-[9px] mb-[51px] sm:text-2xl font-medium">
            {t('HOME_MARKET_DESC')}
          </p>
          <div className="flex">
            <Button type="Primary" className="w-[105px] h-9 !rounded-lg">
              {t('HOME_CREATE_BUTTON_TEXT')}
            </Button>
            <Button
              type="Default"
              className="w-[105px] h-9 ml-[14px] !rounded-lg"
            >
              {t('HOME_MARKET_BUTTON_TEXT')}
            </Button>
          </div>
        </div>
        <ImageSwiper />
      </div>
    </div>
  );
}
