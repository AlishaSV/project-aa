import { TFormField, useAddNewRoleForm } from './useAddNewRoleForm';
import React from 'react';
import { Stack, TextField } from '@mui/material';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';

const fields: TFormField[] = [
  {
    id: 'title',
    label: 'Title',
  },
];

export const AddNewRoleForm = () => {
  const { formik } = useAddNewRoleForm();
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={{ m: 1 }}>
          {fields.map((item) => (
            <TextField
              key={item.id}
              id={item.id}
              label={item.label}
              placeholder={item.label}
              value={formik.values[item.id]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
              multiline
              variant="standard"
            />
          ))}
        </Stack>
        <MUIButton>Submit</MUIButton>
      </form>
    </div>
  );
};
