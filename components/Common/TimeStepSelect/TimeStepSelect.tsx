import { ChevronDown } from 'baseui/icon';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import React, { useRef, useState } from 'react';
import { useClickAway, useToggle } from 'react-use';

import styles from './TimeStepSelect.module.scss';

interface TimeStepSelectProps {
  className?: string;
  options: number[];
  defaultIndex: number;
  cb: (value: number) => void;
}

export function TimeStepSelect(props: TimeStepSelectProps) {
  const { className, options, defaultIndex, cb } = props;
  const [value, setValue] = useState(options[defaultIndex]);
  const { t, i18n } = useTranslation('home');
  const [showSelect, toggleShowSelect] = useToggle(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useClickAway(ref, () => {
    showSelect && toggleShowSelect();
  });

  return (
    <div className={cn(styles.TimeStepSelect, className, 'ml-1 sm:ml-2')}>
      <div
        ref={ref}
        className="relative z-10 -mt-10 mb-10 flex cursor-pointer items-center justify-center bg-white text-[28px] sm:mt-0 sm:mb-0"
        onClick={toggleShowSelect}
      >
        <span className="text-themeGreen">{value}</span>
        <span className="ml-1 text-themeGreen sm:ml-2">
          {`${t('HOME_SECTION_TOP_COLLECTION_DAY')}${
            i18n.language === 'en' && value > 1 ? 's' : ''
          }`}
        </span>
        <div>
          <ChevronDown size={34} color="#03D34A" />
        </div>
        {showSelect && (
          <div className="absolute top-12 w-40 overflow-hidden rounded-lg border-[1px] border-solid border-gray-100 bg-white shadow-md sm:right-4">
            {options.map((item, index) => {
              const isLast = index === options.length - 1;
              return (
                <div
                  key={item}
                  onClick={() => {
                    setValue(item);
                    cb(item);
                  }}
                  className={cn(
                    'w-30 flex h-12 items-center justify-center space-x-2 py-2 px-2 text-[18px] text-themeGreen hover:bg-gray-50',
                    isLast ? '' : 'border-b-[1px] border-solid border-gray-100'
                  )}
                >
                  <span>{item}</span>
                  <span>{`${t('HOME_SECTION_TOP_COLLECTION_DAY')}${
                    i18n.language === 'en' && item > 1 ? 's' : ''
                  }`}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
