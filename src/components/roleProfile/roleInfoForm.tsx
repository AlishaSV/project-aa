'use client';
import { Role } from 'mesh';
import { UseRoleForm } from '@/components/roleProfile/useRoleForm';
import { Stack, TextField } from '@mui/material';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';
import React from 'react';

export type TFormField = {
  label: string;
  id: keyof Omit<Role, 'id'>;
};

const fields: TFormField[] = [
  {
    id: 'title',
    label: 'Title',
  },
  {
    id: 'description',
    label: 'Description',
  },
];

export const RoleInfoForm = () => {
  const { formik } = UseRoleForm();
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
