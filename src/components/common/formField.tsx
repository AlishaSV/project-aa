import { Field } from 'formik';
import * as React from 'react';
import { StyledErrors } from '@/components/styledComponents/common/styledErrors';

type TFormFieldProps = {
  label: string;
  fieldType: string;
  placeholder: string;
  error: string | null;
  showLabel?: boolean;
};

export const FormField = ({
  label,
  fieldType,
  error,
  placeholder,
  showLabel = false,
}: TFormFieldProps) => {
  return (
    <StyledErrors>
      {showLabel ? <label htmlFor={fieldType}>{label}</label> : null}
      <Field id={fieldType} name={fieldType} placeholder={placeholder} />
      {error ? <span>{error}</span> : null}
    </StyledErrors>
  );
};
