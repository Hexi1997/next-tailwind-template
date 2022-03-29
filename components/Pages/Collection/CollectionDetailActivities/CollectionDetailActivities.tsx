import cn from 'classnames';

import { CollectionActivityList } from './CollectionActivityList';
import { CollectionActivitySelector } from './CollectionActivitySelector/CollectionActivitySelector';
import styles from './CollectionDetailActivities.module.scss';
interface CollectionDetailActivitiesProps {
  className?: string;
}

export function CollectionDetailActivities(
  props: CollectionDetailActivitiesProps
) {
  const { className } = props;

  return (
    <div className={cn(styles.CollectionDetailActivities, className)}>
      <CollectionActivitySelector />
      <CollectionActivityList />
    </div>
  );
}
