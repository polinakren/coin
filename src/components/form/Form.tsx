import { Formik, FormikConfig, FormikHelpers } from 'formik';
import { isFunction } from 'lodash';
import { FormLayout } from 'antd/es/form/Form';

import { AntForm, AntFormProps } from './index';

export type FormProps<Values> = {
  initialValues: FormikConfig<Values>['initialValues'];
  validationSchema?: FormikConfig<Values>['validationSchema'];
  children?: FormikConfig<Values>['children'];
  onSubmit?: FormikConfig<Values>['onSubmit'];
  layout?: FormLayout;
  className?: string;
  onValuesChange?: AntFormProps['onValuesChange'];
};

export const Form = <Values extends {}>({
  children,
  className,
  initialValues,
  validationSchema,
  onSubmit,
  onValuesChange,
  layout = 'vertical',
}: FormProps<Values>) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit ? makeSubmitHandler(onSubmit) : () => {}}
      enableReinitialize
    >
      {formikProps => {
        return (
          <AntForm
            onValuesChange={onValuesChange}
            onFinish={onSubmit ? () => formikProps.handleSubmit() : () => {}}
            className={className}
            layout={layout}
            initialValues={initialValues}
          >
            {isFunction(children) ? children(formikProps) : children}
          </AntForm>
        );
      }}
    </Formik>
  );
};

function makeSubmitHandler<V>(onSubmit: (values: V, methods: FormikHelpers<V>) => void) {
  return async function handleSubmit(values: V, methods: FormikHelpers<V>) {
    try {
      await onSubmit(values, methods);
    } catch (ex) {
      methods.setErrors({
        // @ts-ignore
        [ex.field || 'commonErrors']:
          // @ts-ignore
          ex.errorText || 'Возникла непредвиденная ошибка',
      });
    } finally {
      methods.setTouched({});
      methods.setSubmitting(false);
    }
  };
}
