import { Tab, Tabs as BaseUiTabs } from 'baseui/tabs';
import cn from 'classnames';
import { ReactNode, useState } from 'react';

import styles from './Tabs.module.scss';

interface ITab {
  title: string;
  element: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: ITab[];
}

export function Tabs(props: TabsProps) {
  const { className, tabs } = props;
  const [activeKey, setActiveKey] = useState<string>(tabs[0].title);

  return (
    <div className={cn(styles.Tabs, className)}>
      <BaseUiTabs
        onChange={({ activeKey }) => {
          setActiveKey(activeKey as string);
        }}
        activeKey={activeKey}
        overrides={{
          TabBar: {
            style: () => ({
              backgroundColor: '#ffffff'
            })
          },
          TabContent: {
            style: () => ({
              padding: '0 10px'
            })
          }
        }}
      >
        {tabs.map((item) => (
          <Tab key={item.title} title={item.title}>
            {tabs.find((titem) => titem.title === item.title)?.element}
          </Tab>
        ))}
      </BaseUiTabs>
    </div>
  );
}
