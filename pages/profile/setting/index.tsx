import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React, { useEffect, useMemo, useState } from 'react';

import { FormField, FormSubmitButton, FormTitle } from '@/components';
import { ImageSelector } from '@/components/ImageSelector';

import styles from './_index.module.scss';

interface settingProps {
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
        'profile'
      ]))
    }
  };
}

function Setting(props: settingProps) {
  const { className } = props;
  const { t } = useTranslation(['profile', 'common']);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [logoImg, setLogoImg] = useState('');
  const [featureImg, setFeatureImg] = useState('');
  const [bannerImg, setBannerImg] = useState('');

  const [showSubmitButton, setShowSubmitButton] = useState(false);

  useEffect(() => {
    if (name && bio && logoImg && featureImg && bannerImg) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  }, [bannerImg, bio, featureImg, logoImg, name]);

  return (
    <>
      <NextSeo
        title={t('PROFILE_SETTING_SEO_TITLE')}
        description={t('PROFILE_SETTING_SEO_DESC')}
      />
      <div className={cn(styles.setting, 'container', className)}>
        <FormTitle
          title={t('PROFILE_SETTING_FORM_TITLE')}
          className="my-[55px]"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit');
          }}
        >
          <FormField title={t('PROFILE_SETTING_FORM_USERNAME_TITLE')}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-9 w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999]"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('PROFILE_SETTING_FORM_USERNAME_TITLE')
              })}
            />
          </FormField>
          <FormField title={t('PROFILE_SETTING_FORM_BIO_TITLE')}>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full max-w-[540px] rounded-lg border-2 border-solid border-[#ccc] pl-2 text-[#999] outline-none"
              placeholder={t('COMMON_PLACEHOLDER', {
                ns: 'common',
                fieldName: t('PROFILE_SETTING_FORM_BIO_TITLE')
              })}
            />
          </FormField>
          <FormField
            title={t('PROFILE_SETTING_FORM_LOGO_TITLE')}
            subTitle={t('PROFILE_SETTING_FORM_LOGO_SUBTITLE')}
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
            title={t('PROFILE_SETTING_FORM_FEATURED_TITLE')}
            subTitle={t('PROFILE_SETTING_FORM_FEATURED_SUBTITLE')}
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
            title={t('PROFILE_SETTING_FORM_BANNER_TITLE')}
            subTitle={t('PROFILE_SETTING_FORM_BANNER_SUBTITLE')}
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

          <FormSubmitButton
            className="my-10 sm:my-20"
            isEnable={showSubmitButton}
          />
        </form>
      </div>
    </>
  );
}

export default Setting;
