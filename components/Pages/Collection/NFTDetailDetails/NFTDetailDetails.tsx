import cn from 'classnames';

import styles from './NFTDetailDetails.module.scss';

interface NFTDetailDetailsProps {
  className?: string;
}

export function NFTDetailDetails(props: NFTDetailDetailsProps) {
  const { className } = props;

  return (
    <div className={cn(styles.NFTDetailDetails, className)}>
      NFTDetailDetails
    </div>
  );
}
