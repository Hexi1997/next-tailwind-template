import cn from 'classnames';

import styles from './NFTDetailActivities.module.scss';

interface NFTDetailActivitiesProps {
  className?: string;
}

export function NFTDetailActivities(props: NFTDetailActivitiesProps) {
  const { className } = props;

  return (
    <div className={cn(styles.NFTDetailActivities, className)}>
      NFTDetailActivities
    </div>
  );
}
