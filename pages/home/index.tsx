import cn from 'classnames';

import styles from './_index.module.scss';

interface homeProps {
  className?: string;
}

function Home(props: homeProps) {
  const { className } = props;

  return <div className={cn(styles.home, className)}>home</div>;
}

export default Home;
