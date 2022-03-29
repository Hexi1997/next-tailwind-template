import cn from 'classnames';
import { useState } from 'react';

import { Button } from '@/components/Common/Button';

import { ActivityTypeArr } from '../CollectionActivityList';
import styles from './CollectionActivitySelector.module.scss';

interface CollectionActivitySelectorProps {
  className?: string;
}

export function CollectionActivitySelector(
  props: CollectionActivitySelectorProps
) {
  const { className } = props;
  const [activeKey, setActiveKey] = useState(ActivityTypeArr[0]);

  return (
    <div
      className={cn(
        styles.CollectionActivitySelector,
        className,
        'mt-[34px] mb-8 flex flex-wrap sm:mb-20'
      )}
    >
      {ActivityTypeArr.map((item) => (
        <Button
          key={item}
          onClick={() => {
            setActiveKey(item);
          }}
          type="Default"
          className={cn(
            'min-w-14 mr-4 mt-2 !rounded-full border-2 border-solid border-gray-100 px-4 py-[10px] text-[14px] hover:!bg-themeGreen hover:!text-white',
            activeKey === item ? 'bg-themeGreen !text-white' : ''
          )}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
