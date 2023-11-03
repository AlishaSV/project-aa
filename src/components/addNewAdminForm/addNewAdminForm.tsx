import React from 'react';
import { Stack, TextField } from '@mui/material';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';
import { TFormField, UseAddNewAdminForm } from './useAddNewAdminForm';

const fields: TFormField[] = [
  {
    id: 'fullName',
    label: 'Full name',
  },
  {
    id: 'email',
    label: 'E-mail',
  },
  {
    id: 'password',
    label: 'Password',
  },
];

export const AddNewAdminForm = () => {
  const { formik } = UseAddNewAdminForm();

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
