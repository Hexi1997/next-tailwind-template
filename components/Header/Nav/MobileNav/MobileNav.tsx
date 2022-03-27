import { Accordion, Panel } from 'baseui/accordion';
import { ANCHOR, SIZE } from 'baseui/drawer';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useToggle } from 'react-use';

import { Drawer } from '@/components/Common/Drawer';
import { useIconFont } from '@/utils/hooks/useIconFont';

import { Search } from '../../Search';
import { menus } from '../Nav';
import MobileLanguageToggle from './MobileLanguageToggle';
import styles from './MobileNav.module.scss';

interface MobileNavProps {
  className?: string;
}

export function MobileNav(props: MobileNavProps) {
  const { className } = props;
  const { IconFont } = useIconFont();
  const { t } = useTranslation('menu');
  const [isShowDrawer, toggleShowDrawer] = useToggle(false);

  return (
    <div className={cn(styles.MobileNav, className, 'lg:hidden')}>
      <IconFont
        onClick={toggleShowDrawer}
        type="icon-et-more"
        className="cursor-pointer text-[26px]"
      />
      <Drawer
        anchor={ANCHOR.right}
        isOpen={isShowDrawer}
        autoFocus={false}
        onClose={toggleShowDrawer}
        size={SIZE.full}
      >
        <ul className="px-2 pt-4 pb-14 md:px-4 lg:px-12">
          <Search className="m-4 block sm:hidden" />
          <Accordion accordion={true}>
            {menus.map((item) => {
              if (item.sub?.length) {
                return (
                  <Panel
                    renderPanelContent={false}
                    key={item.name}
                    title={t(item.name)}
                  >
                    {item.sub.map((subItem, index) => {
                      const isLast = item.sub?.length === index + 1;
                      return (
                        <div
                          key={subItem.name}
                          className={cn(
                            'flex h-[52px] w-full items-center border-solid border-gray-200 px-5 text-[16px]',
                            !isLast ? 'border-b-[1px]' : ''
                          )}
                        >
                          <Link href={subItem.link}>
                            <a
                              className="flex h-full w-full items-center justify-between"
                              onClick={toggleShowDrawer}
                            >
                              <span>{t(subItem.name)}</span>
                              <Image src={subItem.icon || ''} width="22" />
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </Panel>
                );
              } else {
                return (
                  <Link key={item.name} href={item.link}>
                    <a
                      className="flex h-[52px] w-full cursor-pointer items-center border-b-[1px] border-solid border-gray-200 px-5 text-[16px]"
                      onClick={toggleShowDrawer}
                    >
                      {t(item.name)}
                    </a>
                  </Link>
                );
              }
            })}
          </Accordion>
        </ul>
        <MobileLanguageToggle />
      </Drawer>
    </div>
  );
}
