import cn from 'classnames';
import React, {
  createContext,
  FunctionComponentElement,
  useEffect,
  useRef,
  useState
} from 'react';

import { Input, Transition } from '@/components';
import useClickOutside from '@/utils/hooks/useClickOutside';

import { SelectOptionProps } from './Option';
import styles from './Select.module.scss';

export interface SelectProps {
  className?: string;
  defaultValue?: string | string[];
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  children?: React.ReactNode;
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  onVisibleChange?: (visible: boolean) => void;
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}

export const SelectContext = createContext<ISelectContext>({
  selectedValues: []
});

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const {
    className,
    placeholder,
    defaultValue,
    name,
    children,
    disabled,
    onChange,
    onVisibleChange
  } = props;
  const input = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLInputElement>(null);
  const containerWidth = useRef(0);
  const [menuOpen, setOpen] = useState(false);
  const [value, setValue] = useState(
    typeof defaultValue === 'string' ? defaultValue : ''
  );

  const handleOptionClick = (value: string) => {
    setOpen(false);
    setValue(value);
    onVisibleChange && onVisibleChange(false);
    const updatedValues = [value];
    onChange && onChange(value, updatedValues);
  };

  useEffect(() => {
    // focus input
    if (input.current) {
      input.current.focus();
      if (placeholder) input.current.placeholder = placeholder;
    }
  }, [placeholder]);
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current =
        containerRef.current.getBoundingClientRect().width;
    }
  });
  useClickOutside(containerRef, () => {
    setOpen(false);
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false);
    }
  });
  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: []
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      setOpen(!menuOpen);
      if (onVisibleChange) {
        onVisibleChange(!menuOpen);
      }
    }
  };
  const generateOptions = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>;
      if (childElement.type.displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: `select-${i}`
        });
      } else {
        console.error(
          'Warning: Select has a child which is not a Option component'
        );
      }
    });
  };
  const containerClass = cn(styles.Select, className, {
    'menu-is-open': menuOpen,
    'is-disabled': disabled
  });

  return (
    <div className={containerClass} ref={containerRef}>
      <div className={styles.SelectInput} onClick={handleClick}>
        <Input
          ref={input}
          placeholder={placeholder}
          value={value}
          readOnly={true}
          disabled={disabled}
          name={name}
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
          <ul className={styles.SelectDropdown}>{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
    </div>
  );
};

Select.defaultProps = {
  disabled: false
};

export default Select;
