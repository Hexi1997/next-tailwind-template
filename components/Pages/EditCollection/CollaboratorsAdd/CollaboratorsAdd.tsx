/* eslint-disable node/no-callback-literal */
import cn from 'classnames';
import { cloneDeep } from 'lodash';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';

import deleteIcon from '@/assets/images/create/delete.svg';
import { Button } from '@/components';

import styles from './CollaboratorsAdd.module.scss';

interface CollaboratorsAddProps {
  className?: string;
  data: string[];
  cb: (value: string[]) => void;
}

export function CollaboratorsAdd(props: CollaboratorsAddProps) {
  const { className, data, cb } = props;
  const { t } = useTranslation('editcollection');

  return (
    <div className={cn(styles.CollaboratorsAdd, className)}>
      {data.map((item, index) => {
        return (
          <div key={index} className="mb-5 flex items-center">
            <div
              className="mt-1 mr-4 cursor-pointer"
              onClick={() => {
                const newData = [...data];
                newData.splice(index, 1);
                cb(newData);
              }}
            >
              <Image src={deleteIcon} width={20} height={20} />
            </div>
            <input
              value={item}
              onChange={(e) => {
                data[index] = e.target.value;
                cb(cloneDeep(data));
              }}
              className="h-9 w-[287px] rounded-lg border-2 border-solid border-[#ccc] px-4 text-[#999] sm:w-[513px]"
            />
          </div>
        );
      })}
      <Button
        className="h-[40px] w-[289px] rounded-full !bg-[#333] text-white hover:!bg-[#222]"
        onClick={() => {
          cb([...data, '']);
        }}
      >
        {t('EDIT_PAGE_FORM_FIELD_COLLABORATORS_TITLE')}
      </Button>
    </div>
  );
}
