import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useEffect, useState } from 'react';

import { Languages } from '../../LocaleSwitch';

export default function MobileLanguageToggle() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLocaleChange = useCallback(() => {
    router
      .replace(router.asPath, router.asPath, {
        locale: router.locale === 'zh' ? 'en' : 'zh'
      })
      .catch(console.error);
  }, [router]);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(router.locale === 'en');
  }, [router.locale]);

  return (
    <div className="absolute right-0 bottom-0 flex w-full justify-end bg-white p-4">
      <Checkbox
        checked={checked}
        onChange={(e) => {
          setChecked(e.currentTarget.checked);
          setTimeout(handleLocaleChange, 300);
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        {t('COMMON_LANGUAGE')}: {Languages[router.locale || '']?.subMenuLabel}
      </Checkbox>
    </div>
  );
}
