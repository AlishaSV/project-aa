"use client"
import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import {StyledForm} from "@/components/styledComponents/styledForm";
import * as Yup from "yup";

interface MyFormValues {
    fullName: string;
    email: string;
    password: string
}

const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(7),
});

export const RegistrationForm = () => {
    const initialValues: MyFormValues = { fullName: '', email: '', password: '' };
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({ errors, touched })=>
               ( <StyledForm>
                    <label htmlFor="fullName">Full Name</label>
                    <Field id="fullName" name="fullName" placeholder="Full Name" />
                    <label htmlFor="email">E-mail</label>
                    <Field id="email" name="email" placeholder="E-mail" />
                   {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password" />
                    <button type="submit">Submit</button>
                </StyledForm>)
                }
            </Formik>
        </div>
    );
};