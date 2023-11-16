import { Modal as AntModal, ModalFuncProps, ModalProps } from 'antd';
import { useCallback, useState } from 'react';

const { confirm } = AntModal;

const Modal = ({ centered = true, children, ...props }: ModalProps) => {
  return (
    <AntModal centered={centered} {...props}>
      {children}
    </AntModal>
  );
};

const useModal = (isOpenedByDefault = false) => {
  const [isOpenedModal, setIsOpenedModal] = useState(isOpenedByDefault);
  const closeModal = useCallback(() => setIsOpenedModal(false), []);
  const openModal = useCallback(() => setIsOpenedModal(true), []);

  return {
    closeModal,
    openModal,
    isOpenedModal,
  };
};

Modal.confirm = ({ centered = true, okType = 'danger', ...props }: ModalFuncProps) => {
  confirm({
    centered,
    okType,
    ...props,
  });
};

Modal.useModal = useModal;
export { Modal };
