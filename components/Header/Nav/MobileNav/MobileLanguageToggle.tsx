import { Checkbox, STYLE_TYPE } from 'baseui/checkbox';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useCallback, useState } from 'react';

import { Languages } from '../../LocaleSwitch';

export default function MobileLanguageToggle() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLocaleChange = useCallback(() => {
    router
      .replace(router.pathname, router.pathname, {
        locale: router.locale === 'zh' ? 'en' : 'zh'
      })
      .catch(console.error);
  }, [router]);

  const [checked, setChecked] = useState(false);

  return (
    <div className="absolute right-0 bottom-0 p-4 w-full flex justify-end bg-white">
      <Checkbox
        checked={checked}
        onChange={(e) => {
          handleLocaleChange();
          setChecked(e.currentTarget.checked);
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        {t('COMMON_LANGUAGE')}: {Languages[router.locale || '']?.subMenuLabel}
      </Checkbox>
    </div>
  );
}
