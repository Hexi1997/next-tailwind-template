import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './UploadArea.module.scss';

interface UploadAreaProps {
  className?: string;
  cb: (value: FileList | null) => void;
  isUploading: boolean;
  uploadSusImgUrl?: string;
  filePath: string;
  tip: string;
  accept: string;
}

export const imgMimes = ['image/png', 'image/gif', 'image/webp'];

export function isImg(type: string) {
  return imgMimes.includes(type);
}
export function UploadArea(props: UploadAreaProps) {
  const {
    className,
    cb,
    tip,
    isUploading = false,
    uploadSusImgUrl = '',
    filePath = '',
    accept
  } = props;
  const { t } = useTranslation('create');

  return (
    <div
      className="flex h-[300px] w-[300px] rounded-lg border-2 border-solid border-[#ccc] bg-cover bg-center"
      style={
        uploadSusImgUrl
          ? {
              backgroundImage: `url(${uploadSusImgUrl})`
            }
          : {}
      }
    >
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center px-4 pt-20',
          uploadSusImgUrl ? 'bg-gray-900 bg-opacity-60' : ''
        )}
      >
        <div className="mb-4 flex w-full items-center justify-center ">
          {filePath && (
            <span
              className={cn(
                'mr-2',
                uploadSusImgUrl ? 'text-white' : 'text-[#999]'
              )}
            >
              {t('CREATE_PAGE_ALREADY_UPLOAD')}
            </span>
          )}
          <a
            href={filePath}
            target="_blank"
            className={cn(
              'flex-1 underline line-clamp-1 hover:text-themeGreen',
              uploadSusImgUrl ? 'text-white' : 'text-[#999]'
            )}
            rel="noreferrer"
          >
            {filePath}
          </a>
        </div>
        <p
          className={cn(
            'mb-4 font-medium',
            uploadSusImgUrl ? 'text-white' : 'text-[#999]'
          )}
        >
          {tip}
        </p>
        <div className={cn(styles.UploadArea, className, 'relative')}>
          <input
            title=""
            accept={accept}
            type="file"
            className={cn(
              'z-10 h-[39px] w-[213px] cursor-pointer opacity-0 outline-none',
              isUploading ? 'invisible cursor-not-allowed' : 'visible'
            )}
            onChange={(e) => {
              cb(e.target.files);
            }}
          />
          <div
            className={cn(
              'absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-full  font-medium text-white',
              isUploading
                ? 'bg-[#ccc] !text-black'
                : 'pointer-events-none bg-[#333]'
            )}
          >
            {isUploading
              ? `${t('CREATE_PAGE_UPLOADING_FILE')}...`
              : t('CREATE_PAGE_CHOOSE_FILE')}
          </div>
        </div>
      </div>
    </div>
  );
}
