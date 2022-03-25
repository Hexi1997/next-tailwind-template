import cn from 'classnames';
import Image from 'next/image';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';

import { useIconFont } from '@/utils/hooks/useIconFont';

import styles from './Input.module.scss';

type InputSize = 'lg' | 'sm';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  disabled?: boolean;
  size?: InputSize;
  icon?: string;
  prepend?: string | React.ReactNode;
  append?: string | React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      className,
      disabled,
      size,
      icon,
      style,
      prepend,
      append,
      ...restProps
    } = props;

    const classnames = cn(styles.Input, className, {
      [`input-size-${size as string}`]: size,
      'input-group': prepend || append,
      'input-group-append': !!append,
      'input-group-prepend': !!prepend,
      'is-disabled': disabled
    });

    const { IconFont } = useIconFont();

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
        {prepend && <div className={styles.InputPrepend}>{prepend}</div>}
        {icon && <IconFont className={styles.InputIcon} type={icon} />}
        <input
          ref={ref}
          className={styles.InputInner}
          disabled={disabled}
          {...restProps}
        />
        {append && <div className={styles.InputAppend}>{append}</div>}
      </div>
    );
  }
);

export default Input;
