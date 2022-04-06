import { Option } from 'baseui/select';
import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React, { useEffect, useMemo, useState } from 'react';

import { FormField, FormSubmitButton, FormTitle, Select } from '@/components';
import { ImageSelector } from '@/components/ImageSelector';
import { CollaboratorsAdd } from '@/components/Pages/EditCollection/CollaboratorsAdd';
import {
  ILinksInput,
  LinkInput
} from '@/components/Pages/EditCollection/LinkInput';
import { useSize } from '@/utils/hooks/useSize';

import styles from './_index.module.scss';

interface editProps {
  className?: string;
}

export async function getServerSideProps({
  locale
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<Record<string, unknown>>
> {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'menu',
        'common',
        'editcollection'
      ]))
    }
  };
}
function Edit(props: editProps) {
  const { className } = props;
  const { t } = useTranslation(['editcollection', 'common', 'menu']);

  const [logoImg, setLogoImg] = useState('');
  const [featureImg, setFeatureImg] = useState('');
  const [bannerImg, setBannerImg] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState<Option[]>([]);
  const [links, setLinks] = useState<ILinksInput>({});
  const [collaborators, setCollaborators] = useState<string[]>([]);

  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const { isMIN } = useSize();

  useEffect(() => {
    if (
      logoImg &&
      featureImg &&
      bannerImg &&
      name &&
      desc &&
      category.length &&
      links.discord &&
      links.ins &&
      links.twitter &&
      links.website &&
      collaborators.length &&
      collaborators.find((item) => item.trim() === '') === undefined
    ) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  }, [
    bannerImg,
    category.length,
    collaborators,
    desc,
    featureImg,
    links.discord,
    links.ins,
    links.twitter,
    links.website,
    logoImg,
    name
  ]);

  const categoryOptions = useMemo(() => {
    return [
      {
        label: t('MENU_COLLECTIONS_ART', { ns: 'menu' }),
        id: 'art'
      },
      {
        label: t('MENU_COLLECTIONS_SPORTS', { ns: 'menu' }),
        id: 'sports'
      },
      {
        label: t('MENU_COLLECTIONS_MUSIC', { ns: 'menu' }),
        id: 'music'
      },
      {
        label: t('MENU_COLLECTIONS_MOVIES', { ns: 'menu' }),
        id: 'movies'
      },
      {
        label: t('MENU_COLLECTIONS_PHOTOGRAPHY', { ns: 'menu' }),
        id: 'photography'
      },
      {
        label: t('MENU_COLLECTIONS_FOOD', { ns: 'menu' }),
        id: 'food'
      },
      {
        label: t('MENU_COLLECTIONS_STARS', { ns: 'menu' }),
        id: 'stars'
      }
    ];
  }, [t]);

  return (
    <>
      <NextSeo
        title={t('EDIT_PAGE_SEO_TITLE')}
        description={t('EDIT_PAGE_SEO_DESC')}
      />
      <div className={cn(styles.edit, 'container', className)}>
        <FormTitle title={t('EDIT_PAGE_FORM_TITLE')} className="my-[55px]" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit');
          }}
        >
          <FormField
            title={t('EDIT_PAGE_FORM_FIELD_LOGO_TITLE')}
            subTitle={t('EDIT_PAGE_FORM_FIELD_LOGO_SUBTITLE')}
          >
            <ImageSelector
              type="logo"
              imgUrl={logoImg}
              cb={(value: File) => {
                // 上传图片的方法，这里先mock
                return new Promise((resolve) => {
                  setTimeout(() => {
                    setLogoImg('https://s1.ax1x.com/2022/04/02/qIDZgU.png');
                    resolve('');
                  }, 3000);
                });
              }}
            />
          </FormField>
          <FormField
            title={t('EDIT_PAGE_FORM_FIELD_FEATURED_TITLE')}
            subTitle={t('EDIT_PAGE_FORM_FIELD_FEATURED_SUBTITLE')}
          >
            <ImageSelector
              type="feature"
              imgUrl={featureImg}
              cb={(value: File) => {
                // 上传图片的方法，这里先mock
                return new Promise((resolve) => {
                  setTimeout(() => {
                    setFeatureImg('https://s1.ax1x.com/2022/04/02/qIDevF.png');
                    resolve('');
                  }, 3000);
                });
              }}
            />
          </FormField>
          <FormField
            title={t('EDIT_PAGE_FORM_FIELD_BANNER_TITLE')}
            subTitle={t('EDIT_PAGE_FORM_FIELD_BANNER_SUBTITLE')}
          >
            <ImageSelector
              type="banner"
              imgUrl={bannerImg}
              cb={(value: File) => {
                // 上传图片的方法，这里先mock
                return new Promise((resolve) => {
                  setTimeout(() => {
                    setBannerImg('https://s1.ax1x.com/2022/04/02/qIDnu4.png');
                    resolve('');
                  }, 3000);
                });
              }}
            />
          </FormField>
          <FormField title={t('EDIT_PAGE_FORM_FIELD_NAME_TITLE')}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-9 w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999]"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('EDIT_PAGE_FORM_FIELD_NAME_TITLE')
              })}
            />
          </FormField>
          <FormField title={t('EDIT_PAGE_FORM_FIELD_DESC_TITLE')}>
            <textarea
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999] outline-none"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('EDIT_PAGE_FORM_FIELD_DESC_TITLE')
              })}
            />
          </FormField>
          <FormField
            title={t('EDIT_PAGE_FORM_FIELD_CATEGORY_TITLE')}
            subTitle={t('EDIT_PAGE_FORM_FIELD_CATEGORY_SUBTITLE')}
          >
            <Select
              value={category}
              placeholder={t('EDIT_PAGE_FORM_FIELD_CATEGORY_CHOOSE')}
              options={categoryOptions}
              onChange={(e) => setCategory(e.value as Option[])}
              mode="square"
              style={{
                width: isMIN ? '' : '280px'
              }}
            />
          </FormField>
          <FormField title={t('EDIT_PAGE_FORM_FIELD_LINKS_TITLE')}>
            <LinkInput
              cb={(value: ILinksInput) => {
                setLinks(value);
              }}
              links={links}
            />
          </FormField>
          <FormField
            title={t('EDIT_PAGE_FORM_FIELD_COLLABORATORS_TITLE')}
            subTitle={t('EDIT_PAGE_FORM_FIELD_COLLABORATORS_SUBTITLE')}
            className="mb-5"
          >
            <CollaboratorsAdd
              data={collaborators}
              cb={(value: string[]) => {
                setCollaborators(value);
              }}
            />
          </FormField>
          <FormSubmitButton
            className="my-10 sm:my-20"
            isEnable={showSubmitButton}
          />
        </form>
      </div>
    </>
  );
}

export default Edit;
