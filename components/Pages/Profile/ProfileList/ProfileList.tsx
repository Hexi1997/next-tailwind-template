import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import { CategoryList, ItemCard, Select } from '@/components';

import styles from './ProfileList.module.scss';

interface ProfileItem {
  id: number;
  img: any;
  name: string;
  userName: string;
  userIcon: any;
  starCount: number;
  isLikeByYou: boolean;
  price: string;
}
interface ProfileListProps {
  className?: string;
  data: ProfileItem[];
}

export function ProfileList(props: ProfileListProps) {
  const { className, data } = props;
  const { t } = useTranslation(['selection', 'category', 'profile']);

  const categories = [
    { label: t('CATEGORY_TAG_ALL', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_FOOD', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_MINTED', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_STARS', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_MUSIC', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_SPORTS', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_MOVIES', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_ART', { ns: 'category' }) },
    { label: t('CATEGORY_TAG_PHOTOGRAPHY', { ns: 'category' }) }
  ];
  const selectOptions1 = [
    {
      label: t('SELECT_OPTION_PRICE_HIGHEST', { ns: 'selection' }),
      id: 1
    },
    {
      label: t('SELECT_OPTION_PRICE_LOWEST', { ns: 'selection' }),
      id: 2
    },
    {
      label: t('SELECT_OPTION_TIME_NEWEST', { ns: 'selection' }),
      id: 3
    }
  ];
  const selectOptions2 = [
    {
      label: t('SELECT_OPTION_ADD_TIME_NEWEST', { ns: 'selection' }),
      id: 1
    },
    {
      label: t('SELECT_OPTION_ADD_TIME_OLDEST', { ns: 'selection' }),
      id: 2
    }
  ];

  return (
    <div className={cn(styles.ProfileList, className, 'pt-[34px]')}>
      <CategoryList
        title={t('CATEGORY_TITLE_CATEGORY', { ns: 'category' })}
        categories={categories}
        value={t('CATEGORY_TAG_ALL', { ns: 'category' }) as unknown as string}
      />
      <div className={cn('mt-[45px] hidden', 'lg:flex')}>
        <Select
          style={{ width: '200px', marginRight: '36px' }}
          options={selectOptions1}
        />
        <Select style={{ width: '200px' }} options={selectOptions2} />
      </div>
      {data.length ? (
        <div
          className={cn(
            'mt-[40px] mb-[172px] grid grid-cols-1 grid-rows-3 gap-x-44 gap-y-8',
            'lg:grid-cols-2 lg:grid-rows-2',
            'xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-44'
          )}
        >
          {data.map((item) => (
            <ItemCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="py-[132px] text-center">
          <p className="font-medium text-[#333333]">
            {t('PROFILE_LIST_EMPTY_TITLE', { ns: 'profile' })}
          </p>
          <p className="mt-4 text-sm text-[#999999]">
            {t('PROFILE_LIST_EMPTY_SUBTITLE', { ns: 'profile' })}
          </p>
        </div>
      )}
    </div>
  );
}
