import { Input as BaseInput, InputProps as BaseInputProps } from 'baseui/input';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import styles from './Input.module.scss';

interface InputProps extends BaseInputProps {
  className?: string;
  style?: CSSProperties;
}

const Input: FC<InputProps> = (props) => {
  const { className, style, ...restProps } = props;

  return (
    <div className={cn(styles.Input, className)}>
      <BaseInput
        {...restProps}
        overrides={{
          Root: {
            style: () => ({
              outline: 'none',
              height: '40px',
              padding: '0',
              border: '1px solid #999999',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: 'white',
              ...style
            })
          },
          InputContainer: {
            style: () => ({
              backgroundColor: 'white',
              outline: 'none',
              border: 'none',
              height: '36px'
            })
          }
        }}
      />
    </div>
  );
};

export default Input;
