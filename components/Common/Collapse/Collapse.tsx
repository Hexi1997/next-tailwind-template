import { ChevronDown } from 'baseui/icon';
import cn from 'classnames';
import { CSSProperties, FC, ReactNode, useState } from 'react';

import styles from './Collapse.module.scss';

interface CollapseProps {
  className?: string;
  children: ReactNode;
  title: string;
  titleStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

const Collapse: FC<CollapseProps> = (props) => {
  const { className, title, children, titleStyle, contentStyle } = props;
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div
      className={cn(
        styles.Collapse,
        className,
        'rounded-2xl border-[1px] border-solid border-[#cccccc]'
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between p-4',
          `${showPanel ? '' : ''}`
        )}
        style={titleStyle}
        onClick={() => setShowPanel(!showPanel)}
      >
        <span className="text-base font-semibold text-[#333333]">{title}</span>
        <ChevronDown size={30} color="#333333" />
      </div>
      {showPanel && (
        <div className="h-[0.5px] w-full border-[0.5px] border-solid border-[#cccccc]"></div>
      )}
      <div
        className={cn(
          `${showPanel ? 'block' : 'hidden'}`,
          'border-t-solid border-t-[1px] border-t-[#cccccc] p-4'
        )}
        style={contentStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
