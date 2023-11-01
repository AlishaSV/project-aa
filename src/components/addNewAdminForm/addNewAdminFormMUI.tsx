import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAddNewAdminMutation } from '@/components/addNewAdminForm/graphql/addNewAdmin.gql';
import { useRouter } from 'next/navigation';
import { Stack, TextField } from '@mui/material';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';

interface MyFormValues {
  email: string;
  password: string;
  fullName: string;
}

type TFormField = {
  label: string;
  id: keyof MyFormValues;
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
  {
    id: 'password',
    label: 'Password',
  },
];

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const AddNewAdminFormMUI = () => {
  const [addNewAdminMutation, { data, loading }] = useAddNewAdminMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = await addNewAdminMutation({
        variables: {
          user: {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
          },
        },
      });
      if (data.data) {
        const newUserId = data.data.addUser?.id;
        if (newUserId) {
          await router.push(`/user/${newUserId}`);
        }
      }
    },
  });

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
