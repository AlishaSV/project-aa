import { Field } from 'formik';
import * as React from 'react';
import { StyledErrors } from '@/components/styledComponents/common/styledErrors';
import { Stack } from '@mui/material';

type TFormFieldProps = {
  label?: string;
  fieldType: string;
  placeholder: string;
  error: string | null;
};

export const FormField = ({ label, fieldType, error, placeholder }: TFormFieldProps) => {
  return (
    <Stack spacing={1}>
      {label ? <label htmlFor={fieldType}>{label}</label> : null}
      <Field id={fieldType} name={fieldType} placeholder={placeholder} />
      {error ? <StyledErrors>{error}</StyledErrors> : null}
    </Stack>
  );
};
