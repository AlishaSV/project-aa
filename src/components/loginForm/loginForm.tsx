'use client';
import { Formik } from 'formik';
import { StyledLoginForm } from '@/components/styledComponents/login/styledLoginForm';
import { LoginFormSchema } from '@/components/loginForm/loginFormSchema';
import { FormField } from '@/components/common';
import * as React from 'react';
import { FormWrapper } from '@/components/styledComponents/common/styledFormWrapper';
import { StyledHeader } from '@/components/styledComponents/common/styledHeader';
import { useLoginLazyQuery } from '@/components/loginForm/graphql/Login.gql';
import Link from 'next/link';
import { useUserContext } from '@/components/utils';

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
export const LoginForm = () => {
  const [LoginLazyQuery, { loading }] = useLoginLazyQuery();
  const { isUserLoggedIn } = useUserContext();

  const initialValues: MyFormValues = { email: '', password: '' };
  return !isUserLoggedIn ? (
    <FormWrapper>
      <StyledHeader>Sign in</StyledHeader>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={async (values, actions) => {
            const data = (
              await LoginLazyQuery({
                variables: {
                  email: values.email,
                  password: values.password,
                },
              })
            )?.data;
          }}
        >
          {({ errors, touched }) => (
            <StyledLoginForm>
              {fields.map((item) => (
                <FormField
                  key={item.id}
                  fieldType={item.id}
                  label={item.label}
                  placeholder={item.label}
                  error={errors?.[item.id] && touched?.[item.id] ? errors?.[item.id] ?? null : null}
                />
              ))}
              <button type="submit">Login</button>
            </StyledLoginForm>
          )}
        </Formik>
      )}
    </FormWrapper>
  ) : (
    <Link href={'/account'}>your account</Link>
  );
};
