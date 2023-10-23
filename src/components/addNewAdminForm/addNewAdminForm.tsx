import { FormWrapper } from '@/components/styledComponents/common/styledFormWrapper';
import { StyledHeader } from '@/components/styledComponents/common/styledHeader';
import { Formik } from 'formik';
import { LoginFormSchema } from '@/components/loginForm/loginFormSchema';
import { StyledLoginForm } from '@/components/styledComponents/login/styledLoginForm';
import { FormField } from '@/components/common';
import * as React from 'react';
import { useAddNewAdminMutation } from '@/components/addNewAdminForm/graphql/addNewAdmin.gql';
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
  const [addNewAdminMutation, { data, loading }] = useAddNewAdminMutation();

  const router = useRouter();

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
