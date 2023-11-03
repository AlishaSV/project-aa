import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAddNewAdminMutation } from './graphql/addNewAdmin.gql';
import { useRouter } from 'next/navigation';

interface MyFormValues {
  email: string;
  password: string;
  fullName: string;
}

export type TFormField = {
  label: string;
  id: keyof MyFormValues;
};

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const UseAddNewAdminForm = () => {
  const [addNewAdminMutation] = useAddNewAdminMutation();
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
  return {
    formik,
  };
};
