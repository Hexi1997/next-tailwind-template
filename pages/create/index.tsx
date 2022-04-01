import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import { FormField } from '@/components/Common/Form/FormField';
import { FormSubmitButton } from '@/components/Common/Form/FormSubmitButton';
import { FormTitle } from '@/components/Common/Form/FormTitle';
import { CollectionSelector } from '@/components/Pages/Create/CollectionSelector';
import { ProperityAdd } from '@/components/Pages/Create/ProperityAdd';
import { UploadArea } from '@/components/Pages/Create/UploadArea';

import {
  imgMimes,
  isImg
} from '../../components/Pages/Create/UploadArea/UploadArea';
import styles from './_index.module.scss';

interface createProps {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'create'
      ]))
    }
  };
}

export interface IProperty {
  type?: string;
  name?: string;
}

function Create(props: createProps) {
  const { className } = props;
  const { t } = useTranslation(['create', 'common']);
  const [uploadFilePath, setFilePath] = useState('');
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [isUploadFileImg, setIsUploadFileImage] = useState(true);

  const [coverFilePath, setCoverFilePath] = useState('');
  const [isUploadingCover, setIsUploadCover] = useState(false);

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [collectionId, setCollectionId] = useState('');
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [royalties, setRoyalties] = useState<number | null>(null);
  const [royaltiesOwner, setRoyaltiesOwner] = useState('');

  return (
    <>
      <NextSeo
        title={t('CREATE_PAGE_SEO_TITLE')}
        description={t('CREATE_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.create, className, 'container')}>
        <FormTitle title={t('CREATE_PAGE_FORM_TITLE')} className="my-[55px]" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit');
          }}
        >
          <FormField title={t('CREATE_PAGE_FORM_FIELD_UPLOAD_FILE')}>
            <UploadArea
              accept={`${imgMimes.join(', ')}, audio/mpeg, video/mp4`}
              filePath={uploadFilePath}
              uploadSusImgUrl={isUploadFileImg ? uploadFilePath : ''}
              isUploading={isUploadingFile}
              cb={(value: FileList | null) => {
                if (value && value.length) {
                  setFilePath('');
                  setIsUploadingFile(true);
                  setTimeout(() => {
                    setIsUploadingFile(false);
                    setIsUploadFileImage(isImg(value[0].type));
                    setFilePath(
                      'https://lh3.googleusercontent.com/3bZ0o78gCK12W8a1gsy6fFSgVshx88sFdOmV55uZg4_RSxPminN7jsTiRVBgH6DSsMg5okU1PFqp0ttrqc7PI1Ra9i_qWWzH-H85=w600'
                    );
                  }, 5000);
                }
              }}
              tip={t('CREATE_PAGE_FORM_FIELD_UPLOAD_FILE_PLACEHOLDER')}
            />
          </FormField>
          {!isUploadFileImg && (
            <FormField
              title={t('CREATE_PAGE_FORM_FIELD_COVER')}
              subTitle={t('CREATE_PAGE_FORM_FIELD_COVER_SUBTITLE')}
            >
              <UploadArea
                accept={imgMimes.join(', ')}
                filePath={coverFilePath}
                uploadSusImgUrl={coverFilePath}
                isUploading={isUploadingCover}
                cb={(value: FileList | null) => {
                  if (value && value.length) {
                    setCoverFilePath('');
                    setIsUploadCover(true);
                    setTimeout(() => {
                      setIsUploadCover(false);
                      setCoverFilePath(
                        'https://lh3.googleusercontent.com/3bZ0o78gCK12W8a1gsy6fFSgVshx88sFdOmV55uZg4_RSxPminN7jsTiRVBgH6DSsMg5okU1PFqp0ttrqc7PI1Ra9i_qWWzH-H85=w600'
                      );
                    }, 5000);
                  }
                }}
                tip={t('CREATE_PAGE_FORM_FIELD_COVER_PLACEHOLDER')}
              />
            </FormField>
          )}
          <FormField title={t('CREATE_PAGE_FORM_FIELD_NAME')}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-9 w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999]"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('CREATE_PAGE_FORM_FIELD_NAME')
              })}
            />
          </FormField>
          <FormField title={t('CREATE_PAGE_FORM_FIELD_DESC')} isOptional={true}>
            <textarea
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999] outline-none"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('CREATE_PAGE_FORM_FIELD_DESC')
              })}
            />
          </FormField>
          <FormField
            title={t('CREATE_PAGE_FORM_FIELD_COLLECTION')}
            subTitle={t('CREATE_PAGE_FORM_FIELD_COLLECTION_SUBTITLE')}
          >
            <CollectionSelector
              collectionId={collectionId}
              cb={(value: string) => {
                setCollectionId(value);
              }}
            />
          </FormField>
          <FormField
            title={t('CREATE_PAGE_FORM_FIELD_PROPERTIES')}
            subTitle={t('CREATE_PAGE_FORM_FIELD_PROPERTIES_SUBTITLE')}
          >
            <ProperityAdd
              properties={properties}
              cb={(value: IProperty[]) => setProperties(value)}
            />
          </FormField>
          <FormField title={t('CREATE_PAGE_FORM_FIELD_ROYALTIES')}>
            111
          </FormField>
          <FormSubmitButton
            className="my-10 sm:my-20 "
            isEnable={true}
          ></FormSubmitButton>
        </form>
      </div>
    </>
  );
}

export default Create;
