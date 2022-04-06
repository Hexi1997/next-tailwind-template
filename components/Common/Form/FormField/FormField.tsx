import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

import styles from './FormField.module.scss';

interface FormFieldProps {
  className?: string;
  isOptional?: boolean;
  title: string;
  subTitle?: string;
  children: ReactNode;
}

export function FormField(props: FormFieldProps) {
  const { className, isOptional, title, subTitle, children } = props;
  const { t } = useTranslation('common');

  return (
    <div className={cn(styles.FormField, 'mt-10 sm:mt-[70px]', className)}>
      <h1
        className={cn(
          'text-lg font-semibold text-[#333333]',
          subTitle ? '' : 'mb-2 sm:mb-6'
        )}
      >
        {title}
        <span className="text-[#999999]">
          {isOptional && ` (${t('COMMON_OPTIONAL')})`}
        </span>
      </h1>
      {subTitle && (
        <div className="mt-[10px] mb-2 text-sm font-normal text-[#333333] sm:mb-6">
          {subTitle}
        </div>
      )}
      {children}
    </div>
  );
}
