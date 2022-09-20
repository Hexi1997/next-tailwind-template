import cn from 'classnames';

import styles from './{{name}}.module.scss';

interface {{name}}Props {
  className?: string;
}

export function {{name}}(props: {{name}}Props) {
  const { className } = props;

  return <div className={cn(styles.{{name}}, className)}>{{name}}</div>;
}
