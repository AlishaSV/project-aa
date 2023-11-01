// import { FormWrapper } from '@/components/styledComponents/common/styledFormWrapper';
// import { StyledHeader } from '@/components/styledComponents/common/styledHeader';
// import { Formik } from 'formik';
// import { LoginFormSchema } from '@/components/loginForm/loginFormSchema';
// import { StyledLoginForm } from '@/components/styledComponents/login/styledLoginForm';
// import { FormField } from '@/components/common';
// import * as React from 'react';
// import { useAddNewAdminMutation } from '@/components/addNewAdminForm/graphql/addNewAdmin.gql';
// import { useRouter } from 'next/navigation';
// import { Button } from '@mui/material';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// interface MyFormValues {
//   email: string;
//   password: string;
//   fullName: string;
// }
//
// type TFormField = {
//   label: string;
//   id: keyof MyFormValues;
// };
//
// const fields: TFormField[] = [
//   {
//     id: 'fullName',
//     label: 'Full name',
//   },
//   {
//     id: 'email',
//     label: 'E-mail',
//   },
//   {
//     id: 'password',
//     label: 'Password',
//   },
// ];
//
// // export const AddNewAdminForm = () => {
//   const initialValues: MyFormValues = { fullName: '', email: '', password: '' };
//   const [addNewAdminMutation, { data, loading }] = useAddNewAdminMutation();
//
//   const router = useRouter();
//
//   return (
//     <FormWrapper>
//       <StyledHeader>New admin</StyledHeader>
//       <Box
//         component="form"
//         sx={{
//           '& .MuiTextField-root': { m: 0.8, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div></div>
//         <div>
//           <TextField
//             id="standard-textarea"
//             label="Full name"
//             placeholder="Placeholder"
//             multiline
//             variant="standard"
//           />
//         </div>
//         <div>
//           <TextField
//             id="standard-textarea"
//             label="E-mail"
//             placeholder="Placeholder"
//             multiline
//             variant="standard"
//           />
//         </div>
//         <div>
//           <TextField
//             id="standard-textarea"
//             label="Password"
//             placeholder="Placeholder"
//             multiline
//             variant="standard"
//           />
//         </div>
//       </Box>
//       <Button
//         sx={(theme) => ({
//           color: theme.palette.primary.dark,
//           alignSelf: 'center',
//         })}
//         size="large"
//       >
//         Submit
//       </Button>
//       {loading ? (
//         <div>loading...</div>
//       ) : (
//         <Formik
//           initialValues={initialValues}
//           validationSchema={LoginFormSchema}
//           onSubmit={async (values, actions) => {
//             const data = await addNewAdminMutation({
//               variables: {
//                 user: {
//                   fullName: values.fullName,
//                   email: values.email,
//                   password: values.password,
//                 },
//               },
//             });
//             if (data.data) {
//               const newUserId = data.data.addUser?.id;
//               if (newUserId) {
//                 await router.push(`/user/${newUserId}`);
//               }
//             }
//           }}
//         >
//           {({ errors, touched }) => (
//             <StyledLoginForm>
//               {fields.map((item) => (
//                 <TextField
//                   key={item.id}
//                   id="standard-textarea"
//                   label={item.label}
//                   placeholder={item.label}
//                   value={item.value}
//                   multiline
//                   variant="standard"
//                 />
//               ))}
//             </StyledLoginForm>
//           )}
//         </Formik>
//       )}
//     </FormWrapper>
//   );
// };
