import { ModalProps } from 'antd';
import { FormikConfig, FormikProps, isFunction } from 'formik';
import React, { useState } from 'react';

import { Form, FormProps, Loader, Modal } from '~components';

type ModalFormProps<T> = Omit<ModalProps, 'onOk'> & {
  onOk?: (values: T) => void;
  formProps: Omit<FormProps<T>, 'onSubmit'>;
  children?: FormikConfig<T>['children'];
  isLoading?: boolean;
};

const ModalForm = <T extends {}>({
  open,
  title,
  onCancel,
  onOk,
  formProps,
  children,
  cancelText,
  okText,
  isLoading,
}: ModalFormProps<T>) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form {...formProps}>
          {formikBag => {
            console.log(!formikBag.dirty, !formikBag.isValid, formikBag.isSubmitting, formikBag);
            return (
              <Modal
                forceRender
                open={open}
                title={title}
                onCancel={e => {
                  onCancel?.(e);
                  formikBag.resetForm();
                }}
                okText={okText}
                okButtonProps={{
                  disabled: !formikBag.isValid || formikBag.isSubmitting,
                }}
                cancelText={cancelText}
                onOk={onOk ? getOnOkHandler(formikBag, onOk) : undefined}
              >
                {isFunction(children) ? children(formikBag) : children}
              </Modal>
            );
          }}
        </Form>
      )}
    </>
  );
};

type CurrentRowItemType<T> = {
  item?: T;
};

export const useModalForm = <T extends {}>() => {
  const { closeModal, isOpenedModal, openModal } = Modal.useModal();

  const [currentItem, setCurrentItem] = useState<CurrentRowItemType<T>>();

  return {
    closeModal,
    isOpenedModal,
    openModal,
    setCurrentItem,
    currentItem,
  };
};

const getOnOkHandler =
  <T extends {}>(
    formikBag: FormikProps<T>,
    onOk: ((values: T, formikHelpers: FormikProps<T>) => void | Promise<any>) | undefined
  ) =>
  async () => {
    formikBag.setTouched(
      Object.keys(formikBag.values).reduce(
        (acc, v) => ({
          ...acc,
          [v]: true,
        }),
        {}
      ),
      true
    );
    try {
      await formikBag.submitForm();
      await onOk?.(formikBag.values, formikBag);
      formikBag.resetForm();
    } catch (_) {
    } finally {
      formikBag.setSubmitting(false);
    }
  };

ModalForm.useModalForm = useModalForm;
export { ModalForm };
