import cn from 'classnames';

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
      CollectionDetailActivities
    </div>
  );
}
