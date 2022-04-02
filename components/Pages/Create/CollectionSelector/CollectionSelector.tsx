import { CheckOutlined } from '@ant-design/icons';
import cn from 'classnames';
import Image from 'next/image';

import mockImg1 from '@/assets/images/create/mockCollection1.png';
import mockImg2 from '@/assets/images/create/mockCollection2.jpg';
import mockImg3 from '@/assets/images/create/mockCollection3.png';

import styles from './CollectionSelector.module.scss';
interface CollectionSelectorProps {
  className?: string;
  collectionId: string;
  cb: (value: string) => void;
}

interface ICollectionSelector {
  id: string;
  title: string;
  img: StaticImageData;
}

const mockCollectionSelector: ICollectionSelector[] = [
  {
    id: 'azuki',
    title: 'Azuki',
    img: mockImg1
  },
  {
    id: 'phantabear',
    title: 'Phanta Bear',
    img: mockImg3
  },
  {
    id: 'clonex',
    title: 'CLONE X - X TAKASHI MURAKAMI',
    img: mockImg2
  },
  {
    id: 'azuki2',
    title: 'Azuki2',
    img: mockImg1
  },
  {
    id: 'phantabear2',
    title: 'Phanta Bear2',
    img: mockImg3
  },
  {
    id: 'clonex2',
    title: 'CLONE X 2',
    img: mockImg2
  }
];
export function CollectionSelector(props: CollectionSelectorProps) {
  const { className, cb, collectionId } = props;

  return (
    <div
      className={cn(
        styles.CollectionSelector,
        className,
        'flex w-full max-w-[540px] flex-wrap'
      )}
    >
      {mockCollectionSelector.map((item, index) => (
        <div
          key={index}
          className="relative mr-2 mb-2 w-[154px] text-center"
          onClick={() => {
            cb(item.id);
          }}
        >
          {collectionId === item.id && (
            <CheckOutlined className="absolute mt-[40px] -ml-[30px] bg-white text-[60px] font-bold text-themeGreen" />
          )}
          <div
            className={cn(
              'h-[154px] w-full cursor-pointer overflow-hidden rounded-full border-2 border-solid border-[#ccc] hover:opacity-50',
              collectionId === item.id ? 'opacity-50' : ''
            )}
          >
            <Image src={item.img} width={154} height={154} />
          </div>
          <div className="w-full line-clamp-1">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
