import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

import styles from './_index.module.scss';

interface collectionIdProps {
  className?: string;
}

function CollectionId(props: collectionIdProps) {
  const { className } = props;
  const router = useRouter();
  return (
    <>
      <NextSeo title="collection page" description="collection's description" />
      <div className={cn(styles.collectionId, className, 'container')}>
        Collection {router.query.collectionId}
      </div>
    </>
  );
}

export default CollectionId;
