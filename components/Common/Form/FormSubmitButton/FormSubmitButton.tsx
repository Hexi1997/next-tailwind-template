import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './FormSubmitButton.module.scss';

interface FormSubmitButtonProps {
  className?: string;
  text?: string;
  isEnable?: boolean;
}

export function FormSubmitButton(props: FormSubmitButtonProps) {
  const { className, text, isEnable = true } = props;
  const { t } = useTranslation('common');

  return (
    <div className={cn(styles.FormSubmitButton, className, 'w-full')}>
      <button
        disabled={!isEnable}
        type="submit"
        className={cn(
          'mx-auto flex h-9 w-[264px] items-center justify-center rounded-lg text-white',
          isEnable ? 'bg-themeGreen' : 'cursor-not-allowed bg-gray-500 '
        )}
      >
        {text || t('COMMON_SUBMIT_TEXT')}
      </button>
    </div>
  );
}
