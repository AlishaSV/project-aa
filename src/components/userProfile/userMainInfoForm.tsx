import { Stack, TextField } from '@mui/material';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';
import React from 'react';
import { UseUserMainInfoForm } from '@/components/userProfile/useUserMainInfoForm';
import { User } from 'mesh';

export type TFormField = {
  label: string;
  id: keyof Omit<User, 'id' | 'createdAt' | 'role' | 'updatedAt'>;
};

const fields: TFormField[] = [
  {
    id: 'fullName',
    label: 'Full name',
  },
  {
    id: 'email',
    label: 'E-mail',
  },
];

export const UserMainInfoForm = () => {
  const { formik } = UseUserMainInfoForm();

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
        <MUIButton disabled={Object.keys(formik.touched).length === 0}>save</MUIButton>
      </form>
    </div>
  );
};
