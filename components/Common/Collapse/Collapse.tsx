import { Accordion, Panel } from 'baseui/accordion';
import ChevronDown from 'baseui/icon/chevron-down';
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Collapse.module.scss';

interface CollapseProps {
  className?: string;
  children: ReactNode;
  title: string;
}

const Collapse: FC<CollapseProps> = (props) => {
  const { className, title, children } = props;

  return (
    <div className={cn(styles.Collapse, className)}>
      <Accordion
        overrides={{
          PanelContainer: {
            style: () => ({
              outline: '1px solid #cccccc',
              borderRadius: '16px',
              padding: '0'
            })
          },
          ToggleIcon: {
            props: {
              overrides: {
                SVG: () => <ChevronDown size={30} color="#999999" />
              }
            }
          }
        }}
      >
        <Panel title={title}>
          <div className="border-t-[1px] border-solid border-[#cccccc]">
            {children}
          </div>
        </Panel>
      </Accordion>
    </div>
  );
};

export default Collapse;
