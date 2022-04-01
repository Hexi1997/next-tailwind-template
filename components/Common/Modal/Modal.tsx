import {
  Modal as BaseModal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'baseui/modal';
import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: (openStatus: boolean) => void;
  children?: ReactNode;
  title?: ReactNode;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { className, isOpen, onClose, children, title } = props;

  return (
    <BaseModal
      className={cn(styles.Modal, className, 'test')}
      isOpen={isOpen}
      onClose={() => onClose && onClose(false)}
    >
      <ModalBody>
        {title && (
          <div className="mb-[20px] text-[22px] font-bold text-[#333333]">
            {title}
          </div>
        )}
        {children}
      </ModalBody>
    </BaseModal>
  );
};

export default Modal;
