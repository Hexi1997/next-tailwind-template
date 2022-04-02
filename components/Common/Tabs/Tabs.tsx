import { Tab, Tabs as BaseUiTabs } from 'baseui/tabs';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

import styles from './Tabs.module.scss';

interface ITab {
  title: string;
  element: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: ITab[];
  tabTitleFontSize?: string;
}

export function Tabs(props: TabsProps) {
  const { className, tabs, tabTitleFontSize } = props;
  const router = useRouter();
  const [activeKey, setActiveKey] = useState<string>(tabs[0].title);

  useEffect(() => {
    if (router.query.tab) {
      setActiveKey(router.query.tab as string);
    } else {
      setActiveKey(tabs[0].title);
    }
  }, [router.query.tab, tabs]);

  return (
    <div className={cn(styles.Tabs, className)}>
      <BaseUiTabs
        onChange={({ activeKey }) => {
          router
            .replace({
              pathname: router.pathname,
              query: {
                ...router.query,
                tab: activeKey
              }
            })
            .catch(console.error);
        }}
        activeKey={activeKey}
        overrides={{
          Tab: {
            style: () => ({
              fontSize: tabTitleFontSize || '18px'
            })
          },
          TabBar: {
            style: () => ({
              backgroundColor: '#ffffff'
            })
          },
          TabContent: {
            style: () => ({
              padding: '0 0px'
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
