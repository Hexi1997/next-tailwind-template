import cn from 'classnames';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

type InputSize = 'lg' | 'sm';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  disabled?: boolean;
  size?: InputSize;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { className, disabled, size, style, ...restProps } = props;

    const classnames = cn(styles.Input, className, {
      [`input-size-${size as string}`]: size,
      'is-disabled': disabled
    });

    const fixControlledValue = (value?: string) => {
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      return value;
    };

    if ('value' in props) {
      delete restProps.defaultValue;
      restProps.value = fixControlledValue(props.value);
    }

    return (
      <div className={classnames} style={style}>
        <input
          ref={ref}
          className={styles.InputInner}
          disabled={disabled}
          {...restProps}
        />
      </div>
    );
  }
);

export default Input;
