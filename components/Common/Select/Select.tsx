import { ChevronDown } from 'baseui/icon';
import { Select as BaseSelect, Value } from 'baseui/select';
import { CSSProperties, FC, useState } from 'react';

type SelectOptions = {
  label: string;
  id: string | number;
};

interface SelectProps {
  className?: string;
  style?: CSSProperties;
  options?: SelectOptions[];
  placeholder?: string;
}

const Select: FC<SelectProps> = (props) => {
  const { style, options, placeholder } = props;
  const [value, setValue] = useState([] as Value);

  return (
    <BaseSelect
      options={options}
      value={value}
      placeholder={placeholder}
      onChange={(param) => setValue(param.value)}
      overrides={{
        Root: {
          style: () => ({
            outline: '#999999 solid .0625rem',
            height: '2.25rem',
            padding: '0',
            borderRadius: '1.125rem',
            ...style
          })
        },
        ControlContainer: {
          style: () => ({
            backgroundColor: 'white',
            border: 'none',
            height: '2.25rem',
            font: '400 .875rem Inter'
          })
        },
        SelectArrow: {
          props: {
            overrides: {
              Svg: () => <ChevronDown size={20} color="#999999" />
            }
          }
        }
      }}
    />
  );
};

export default Select;
