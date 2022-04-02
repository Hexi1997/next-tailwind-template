import cn from 'classnames';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import discordImg from '@/assets/images/collection/discord.svg';
import insImg from '@/assets/images/collection/ins.svg';
import twitterImg from '@/assets/images/collection/twitter.svg';
import websiteImg from '@/assets/images/collection/website.svg';

import styles from './LinkInput.module.scss';

interface LinkInputProps {
  className?: string;
  links: ILinksInput;
  cb: (value: ILinksInput) => void;
}

export interface ILinksInput {
  website?: string;
  discord?: string;
  twitter?: string;
  ins?: string;
}

export function LinkInput(props: LinkInputProps) {
  const { className, cb, links } = props;
  const { t } = useTranslation(['common', 'edit']);

  return (
    <div className={cn(styles.LinkInput, className)}>
      <div className="w-full rounded-lg border-2 border-solid border-[#ccc]">
        <div className="flex h-20 w-full items-center border-b-2 border-solid border-[#ccc] px-[27px]">
          <div className="mt-2 flex-shrink-0">
            <Image src={websiteImg} width={30} height={24} />
          </div>
          <div className="ml-4 mr-4 h-8 w-[2px] flex-shrink-0 bg-black bg-opacity-20 sm:ml-6"></div>
          <input
            placeholder={t('COMMON_PLACEHOLDER', {
              fieldName: t('EDIT_PAGE_FORM_FIELD_LINK_WEBSITE', { ns: 'edit' })
            })}
            value={links.website}
            onChange={(e) => {
              // eslint-disable-next-line node/no-callback-literal
              cb({ ...links, website: e.target.value });
            }}
            type="text"
            className="h-9 w-[calc(100%_-_42px)] flex-shrink rounded-lg border-2 border-solid border-[#ccc] px-4 text-[#999]"
          />
        </div>
        <div className="flex h-20 w-full items-center border-b-2 border-solid border-[#ccc] px-[27px]">
          <div className="mt-1 flex-shrink-0">
            <Image src={insImg} width={27} height={27} />
          </div>
          <div className="ml-4 mr-4 h-8 w-[2px] flex-shrink-0 bg-black bg-opacity-20 sm:ml-6"></div>
          <input
            placeholder={t('COMMON_PLACEHOLDER', {
              fieldName: t('EDIT_PAGE_FORM_FIELD_LINK_INSTAGRAM', {
                ns: 'edit'
              })
            })}
            value={links.ins}
            onChange={(e) => {
              // eslint-disable-next-line node/no-callback-literal
              cb({ ...links, ins: e.target.value });
            }}
            type="text"
            className="h-9 w-[calc(100%_-_42px)] flex-shrink rounded-lg border-2 border-solid border-[#ccc] px-4 text-[#999]"
          />
        </div>
        <div className="flex h-20 w-full items-center border-b-2 border-solid border-[#ccc] px-[27px]">
          <div className="mt-1 flex-shrink-0">
            <Image src={twitterImg} width={28} height={26} />
          </div>
          <div className="ml-4 mr-4 h-8 w-[2px] flex-shrink-0 bg-black bg-opacity-20 sm:ml-6"></div>
          <input
            placeholder={t('COMMON_PLACEHOLDER', {
              fieldName: t('EDIT_PAGE_FORM_FIELD_LINK_TWITTER', { ns: 'edit' })
            })}
            value={links.twitter}
            onChange={(e) => {
              // eslint-disable-next-line node/no-callback-literal
              cb({ ...links, twitter: e.target.value });
            }}
            type="text"
            className="h-9 w-[calc(100%_-_42px)] flex-shrink rounded-lg border-2 border-solid border-[#ccc] px-4 text-[#999]"
          />
        </div>
        <div className="flex h-20 w-full items-center px-[27px]">
          <div className="flex-shrink-1 mt-[5px]">
            <Image src={discordImg} width={32} height={24} />
          </div>
          <div className="ml-4 mr-4 h-8 w-[2px] flex-shrink-0 bg-black bg-opacity-20 sm:ml-6"></div>
          <input
            placeholder={t('COMMON_PLACEHOLDER', {
              fieldName: t('EDIT_PAGE_FORM_FIELD_LINK_DISCORD', { ns: 'edit' })
            })}
            value={links.discord}
            onChange={(e) => {
              // eslint-disable-next-line node/no-callback-literal
              cb({ ...links, discord: e.target.value });
            }}
            type="text"
            className="h-9 w-[calc(100%_-_42px)] flex-shrink rounded-lg border-2 border-solid border-[#ccc] px-4 text-[#999]"
          />
        </div>
      </div>
    </div>
  );
}
