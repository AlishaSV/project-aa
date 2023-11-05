import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { useAddRoleMutation } from '@/components/addNewRoleForm/graphql/addNewRole.gql';

interface MyFormValues {
  title: string;
}

export type TFormField = {
  label: string;
  id: keyof MyFormValues;
};

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
});

export const useAddNewRoleForm = () => {
  const [addRoleMutation] = useAddRoleMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = await addRoleMutation({
        variables: { title: values.title },
      });
      if (data.data) {
        const newUserId = data.data.addRole?.id;
        if (newUserId) {
          await router.push(`/role/${newUserId}`);
        }
      }
    },
  });
  return {
    formik,
  };
};
