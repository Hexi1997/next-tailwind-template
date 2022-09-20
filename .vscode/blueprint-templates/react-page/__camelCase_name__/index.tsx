import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './_index.module.scss';

interface {{name}}Props {
  className?: string;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common']))
    }
  };
}

function {{pascalCase name}}(props: {{name}}Props) {
  const { className } = props;

  return <div className={cn(styles.{{camelCase name}}, className)}>{{name}}</div>;
}

export default {{pascalCase name}};
