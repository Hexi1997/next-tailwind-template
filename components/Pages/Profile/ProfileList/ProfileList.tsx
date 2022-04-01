import cn from 'classnames';

import styles from './ProfileList.module.scss';

interface ProfileListProps {
  className?: string;
}

export function ProfileList(props: ProfileListProps) {
  const { className } = props;

  return <div className={cn(styles.ProfileList, className)}>ProfileList</div>;
}
