import { ChevronDown } from 'baseui/icon';
import {
  Select as BaseSelect,
  SelectProps as BaseUISelectProps
} from 'baseui/select';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { CSSProperties, FC } from 'react';

import styles from './Select.module.scss';

interface SelectProps extends BaseUISelectProps {
  className?: string;
  style?: CSSProperties;
  mode?: 'rounded' | 'square';
}

const Select: FC<SelectProps> = (props) => {
  const { style, options, className, mode = 'rounded', ...rest } = props;
  const { t } = useTranslation('selection');

  return (
    <div className={cn(styles.Select, className)}>
      <BaseSelect
        options={options}
        searchable={false}
        placeholder={t('SELECT_PLACEHOLDER')}
        {...rest}
        overrides={{
          Root: {
            style: () => ({
              outline: 'none',
              height: '40px',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              border: mode === 'rounded' ? '1px solid #999' : '2px solid #ccc',
              borderRadius: mode === 'rounded' ? '20px' : '8px',
              overflow: 'hidden',
              ...style
            })
          },
          ControlContainer: {
            style: () => ({
              backgroundColor: 'white',
              border: 'none',
              height: '40px',
              font: '400 .875rem Inter'
            })
          },
          SelectArrow: {
            props: {
              overrides: {
                Svg: () => (
                  <ChevronDown
                    size={30}
                    color={mode === 'rounded' ? '#999999' : '#cccccc'}
                  />
                )
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Select;
