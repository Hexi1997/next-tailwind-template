import { ChevronDown } from 'baseui/icon';
import {
  Select as BaseSelect,
  SelectProps as BaseUISelectProps
} from 'baseui/select';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './Select.module.scss';

interface SelectProps extends BaseUISelectProps {
  className?: string;
  style?: CSSProperties;
}

const Select: FC<SelectProps> = (props) => {
  const { style, options, className, ...rest } = props;

  return (
    <div className={cn(styles.Select, className)}>
      <BaseSelect
        options={options}
        searchable={false}
        {...rest}
        overrides={{
          Root: {
            style: () => ({
              outline: 'none',
              height: '36px',
              padding: '0',
              border: '1px solid #999',
              borderRadius: '18px',
              overflow: 'hidden',
              ...style
            })
          },
          ControlContainer: {
            style: () => ({
              backgroundColor: 'white',
              border: 'none',
              height: '36px',
              font: '400 .875rem Inter'
            })
          },
          SelectArrow: {
            props: {
              overrides: {
                Svg: () => <ChevronDown size={30} color="#999999" />
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Select;
