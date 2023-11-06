import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRoleProfileContext } from '@/components/roleProfile/roleProfileContext';
import { useUpdateRoleMutation } from '@/components/roleProfile/graphql/UpdateRole.gql';
const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string(),
});

export const UseRoleForm = () => {
  const { role, updateRole } = useRoleProfileContext();
  const [updateRoleMutation] = useUpdateRoleMutation();
  const { id, description, title } = role;
  const formik = useFormik({
    initialValues: {
      title,
      description,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await updateRoleMutation({
        variables: {
          roleId: parseInt(id),
          role: values,
        },
      }).then((result) => {
        const data = result.data?.updateRole;
        if (data) {
          updateRole();
        }
      });
    },
  });
  return {
    formik,
  };
};
