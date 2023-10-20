import { FormWrapper } from '@/components/styledComponents/common/styledFormWrapper';
import { StyledHeader } from '@/components/styledComponents/common/styledHeader';
import { Formik } from 'formik';
import { LoginFormSchema } from '@/components/loginForm/loginFormSchema';
import { StyledLoginForm } from '@/components/styledComponents/login/styledLoginForm';
import { FormField } from '@/components/common';
import * as React from 'react';
import { useAddNewAdminLazyQuery } from '@/components/addNewAdminForm/graphql/addNewAdmin.gql';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    label: 'full name',
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
  const initialValues: MyFormValues = { fullName: '', email: '', password: '' };
  const [AddNewAdminLazyQuery, { data, loading }] = useAddNewAdminLazyQuery();

  const router = useRouter();

  useEffect(() => {
    if (data) {
      const newUserId = data?.addUser?.id;
      if (newUserId) {
        router.push(`/user/${newUserId}`);
      }
    }
  }, [data, router]);
  return (
    <FormWrapper>
      <StyledHeader>Add new admin</StyledHeader>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={LoginFormSchema}
          onSubmit={async (values, actions) => {
            await AddNewAdminLazyQuery({
              variables: {
                user: {
                  fullName: values.fullName,
                  email: values.email,
                  password: values.password,
                },
              },
            });
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
                  showLabel={true}
                />
              ))}
              <button type="submit">Submit</button>
            </StyledLoginForm>
          )}
        </Formik>
      )}
    </FormWrapper>
  );
};
