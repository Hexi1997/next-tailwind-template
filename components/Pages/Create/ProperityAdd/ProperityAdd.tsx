import cn from 'classnames';
import { cloneDeep } from 'lodash';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import deleteIcon from '@/assets/images/create/delete.svg';
import { Button } from '@/components/Common/Button';
import { IProperty } from '@/pages/create';

import styles from './ProperityAdd.module.scss';

interface ProperityAddProps {
  className?: string;
  properties: IProperty[];
  cb: (value: IProperty[]) => void;
}

export function ProperityAdd(props: ProperityAddProps) {
  const { className, cb, properties } = props;
  const { t } = useTranslation('create');

  return (
    <div className={cn(styles.ProperityAdd, className)}>
      <table>
        <thead>
          <tr>
            <td className="w-10 opacity-0">1</td>
            <td className="h-9 w-32 sm:w-[190px]">
              {t('CREATE_PAGE_FORM_FIELD_PROPERTIES_TYPE')}
            </td>
            <td className="h-9 w-32 sm:w-[190px]">
              {t('CREATE_PAGE_FORM_FIELD_PROPERTIES_NAME')}
            </td>
          </tr>
        </thead>
        <tbody>
          {properties.map((item, index) => (
            <tr key={index}>
              <td
                onClick={() => {
                  properties.splice(index, 1);
                  cb(cloneDeep(properties));
                }}
                className="cursor-pointer align-middle"
              >
                <div className="mt-1 mb-5">
                  <Image src={deleteIcon} width={20} height={20} />
                </div>
              </td>
              <td className="w-32 align-middle sm:w-[190px]">
                <input
                  value={item.name}
                  onChange={(e) => {
                    item.name = e.target.value;
                    properties[index] = item;
                    cb(cloneDeep(properties));
                  }}
                  type="text"
                  className="mb-5 h-9 w-[calc(100%_-_20px)] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999]"
                />
              </td>
              <td className="h-9 w-32 align-middle sm:w-[190px]">
                <input
                  value={item.type}
                  onChange={(e) => {
                    item.type = e.target.value;
                    properties[index] = item;
                    cb(cloneDeep(properties));
                  }}
                  type="text"
                  className="mb-5 h-9 w-[calc(100%_-_20px)] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999]"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        className="h-10 w-40 !rounded-full !bg-[#333] !text-white"
        onClick={() => {
          cb(cloneDeep([...properties, {}]));
        }}
      >
        {t('CREATE_PAGE_FORM_FIELD_PROPERTIES_ADD_MORE')}
      </Button>
    </div>
  );
}
