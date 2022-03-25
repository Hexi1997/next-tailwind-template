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
        className="text-[26px] cursor-pointer"
      />
      <Drawer
        anchor={ANCHOR.right}
        isOpen={isShowDrawer}
        autoFocus={false}
        onClose={toggleShowDrawer}
        size={SIZE.full}
      >
        <ul className="px-2 pt-4 pb-14 md:px-4 lg:px-12">
          <Search className="block sm:hidden m-4" />
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
                            'w-full h-[52px] flex items-center border-solid border-gray-200 px-5 text-[16px]',
                            !isLast ? 'border-b-[1px]' : ''
                          )}
                        >
                          <Link href={subItem.link}>
                            <a
                              className="flex w-full h-full justify-between items-center"
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
                      className="w-full h-[52px] flex items-center border-solid border-b-[1px] border-gray-200 px-5 text-[16px] cursor-pointer"
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
