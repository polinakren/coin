import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { FieldProps } from 'formik';

import { FormField, FormFieldProps } from '~components';

type InputProps = AntInputProps & { name: string } & Partial<Pick<FormFieldProps, 'label' | 'initialValue'>>;

export const Input = ({ name, label, initialValue, allowClear = true, ...props }: InputProps) => {
  return (
    <FormField name={name} label={label} initialValue={initialValue}>
      {(fieldProps: FieldProps) => (
        <AntInput
          value={fieldProps.field.value}
          allowClear={allowClear}
          {...props}
          onBlur={fieldProps.field.onBlur}
          onChange={fieldProps.field.onChange}
        />
      )}
    </FormField>
  );
};
