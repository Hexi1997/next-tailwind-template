import cn from 'classnames';

import styles from './_index.module.scss';

interface {{name}}Props {
  className?: string;
}

function {{pascalCase name}}(props: {{name}}Props) {
  const { className } = props;

  return <div className={cn(styles.{{camelCase name}}, className)}>{{name}}</div>;
}

export default {{pascalCase name}};
