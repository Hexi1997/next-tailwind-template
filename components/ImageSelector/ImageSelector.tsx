import { SyncOutlined } from '@ant-design/icons';
import cn from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

import selectImg from '@/assets/images/common/selectImg.svg';
import selectImgWhite from '@/assets/images/common/selectImgWhite.svg';

import { imgMimes } from '../Pages/Create/UploadArea/UploadArea';
import styles from './ImageSelector.module.scss';
interface ImageSelectorProps {
  className?: string;
  type: 'logo' | 'feature' | 'banner';
  imgUrl: string;
  cb: (value: File) => Promise<string>;
}
export function ImageSelector(props: ImageSelectorProps) {
  const { className, type, imgUrl, cb } = props;
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className={cn(styles.ImageSelector, className)}>
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden border-2 border-solid border-[#ccc] bg-white bg-opacity-60 bg-cover bg-center',
          isUploading ? 'cursor-not-allowed' : 'cursor-pointer',
          type === 'logo' ? 'h-[95px] w-[95px] rounded-full' : '',
          type === 'feature' ? 'h-[104px] w-[188px] rounded-lg' : '',
          type === 'banner' ? 'h-[104px] w-full max-w-[540px] rounded-lg' : ''
        )}
        style={
          imgUrl
            ? {
                backgroundImage: `url(${imgUrl})`
              }
            : {}
        }
      >
        <div
          className={cn(
            'flex h-full w-full items-center justify-center',
            imgUrl ? 'bg-black bg-opacity-40' : '',
            type === 'logo' ? 'rounded-full' : 'rounded-lg'
          )}
        >
          {isUploading ? (
            <SyncOutlined spin={true} className="text-[45px] text-themeGreen" />
          ) : (
            <Image
              src={imgUrl ? selectImgWhite : selectImg}
              width={42}
              height={30}
            />
          )}
        </div>
        <input
          type="file"
          accept={imgMimes.join(', ')}
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              setIsUploading(true);
              cb(e.target.files[0])
                .catch(console.error)
                .finally(() => {
                  setIsUploading(false);
                });
            }
          }}
          title=""
          className={cn(
            'absolute top-0 left-0 h-full w-full opacity-0',
            isUploading ? 'invisible cursor-not-allowed' : 'cursor-pointer'
          )}
        />
      </div>
    </div>
  );
}
