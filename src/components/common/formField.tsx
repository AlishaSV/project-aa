import { Field } from 'formik';
import * as React from 'react';
import { StyledErrors } from '@/components/styledComponents/common/styledErrors';

type TFormFieldProps = {
  label: string;
  fieldType: string;
  placeholder: string;
  error: string | null;
};

export const FormField = ({ label, fieldType, error, placeholder }: TFormFieldProps) => {
  return (
    <StyledErrors>
      {/*<label htmlFor={fieldType}>{label}</label>*/}
      <Field id={fieldType} name={fieldType} placeholder={placeholder} />
      {error ? <span>{error}</span> : null}
    </StyledErrors>
  );
};
