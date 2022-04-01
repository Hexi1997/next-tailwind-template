import { Modal as BaseModal, ModalBody } from 'baseui/modal';
import { FC, ReactNode } from 'react';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: (openStatus: boolean) => void;
  children?: ReactNode;
  title?: ReactNode;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { isOpen, onClose, children, title } = props;

  return (
    <BaseModal isOpen={isOpen} onClose={() => onClose && onClose(false)}>
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
