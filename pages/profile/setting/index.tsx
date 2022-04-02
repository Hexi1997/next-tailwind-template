import cn from 'classnames';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import { FormField, FormTitle } from '@/components';

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
  const { t } = useTranslation('profile');

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
            test
          </FormField>
          <FormField title={t('PROFILE_SETTING_FORM_BIO_TITLE')}>
            test2
          </FormField>
        </form>
      </div>
    </>
  );
}

export default Setting;
