import { useFormik } from 'formik';
import * as yup from 'yup';
import { User } from 'mesh';
import { useUpdateUserMainInfoMutation } from '@/components/userProfile/graphql/updateUserMainInfo.gql';
import { useUserProfileContext } from '@/components/userProfile/userProfileContext';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  fullName: yup.string().required('Full name is required'),
});

export const UseUserMainInfoForm = () => {
  const { userProfileInfo, updateUserProfileInfo } = useUserProfileContext();

  const { email, fullName, id } = userProfileInfo;

  const [updateUserMainInfoMutation] = useUpdateUserMainInfoMutation();
  const formik = useFormik({
    initialValues: {
      email,
      fullName,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await updateUserMainInfoMutation({
        variables: {
          user: {
            fullName: values.fullName,
            email: values.email,
            id: parseInt(id),
          },
        },
      }).then((responce) => {
        const result = responce.data?.updateUser;
        if (result) {
          updateUserProfileInfo();
        }
      });
    },
  });
  return {
    formik,
  };
};
