'use client';
import { useFormik } from 'formik';
import * as React from 'react';
import { FormWrapper } from '@/components/styledComponents/common/styledFormWrapper';
import { StyledHeader } from '@/components/styledComponents/common/styledHeader';
import { useLoginLazyQuery } from '@/components/loginForm/graphql/Login.gql';
import Link from 'next/link';
import { useUserContext } from '@/components/utils';
import { MUIButton } from '@/components/styledComponents/muiButton/muiButton';
import * as yup from 'yup';
import { Stack, TextField } from '@mui/material';

interface MyFormValues {
  email: string;
  password: string;
}

type TFormField = {
  label: string;
  id: keyof MyFormValues;
};

const fields: TFormField[] = [
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

export const LoginForm = () => {
  const [LoginLazyQuery, { loading }] = useLoginLazyQuery();
  const { isUserLoggedIn } = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      await LoginLazyQuery({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
    },
  });

  return !isUserLoggedIn ? (
    <FormWrapper>
      <StyledHeader>Sign in</StyledHeader>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <Stack sx={{ m: 1, width: 200 }}>
              {fields.map((item) => (
                <TextField
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  placeholder={item.label}
                  value={formik.values[item.id]}
                  onChange={formik.handleChange}
                  error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                  onBlur={formik.handleBlur}
                  multiline
                  variant="standard"
                />
              ))}
            </Stack>
            <MUIButton>Submit</MUIButton>
          </form>
        </div>
      )}
    </FormWrapper>
  ) : (
    <Link href={'/account'}>your account</Link>
  );
};
