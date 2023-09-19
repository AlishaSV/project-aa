"use client"
import {Field, Formik,} from 'formik';
import {StyledLoginForm} from "@/components/styledComponents/login/styledLoginForm";
import {LoginFormSchema} from "@/components/loginForm/loginFormSchema";
import {FormField} from "@/components/common";
import * as React from "react";
import {FormWrapper} from "@/components/styledComponents/common/styledFormWrapper";
import {StyledHeader} from "@/components/styledComponents/common/styledHeader";

interface MyFormValues {
    email: string;
    password: string
}

type TFormField = {
    label: string
    id: keyof MyFormValues
}

const fields: TFormField[] = [
    {
        id: 'email',
        label: 'E-mail'
    },
    {
        id: 'password',
        label: 'Password'
    }
]
export const LoginForm = () => {

    const initialValues: MyFormValues = {email: '', password: ''};

    return (
        <FormWrapper>
            <StyledHeader>Sign in</StyledHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginFormSchema}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({errors, touched}) =>
                    (<StyledLoginForm>
                        {fields.map((item) =>
                            <FormField
                                key={item.id}
                                fieldType={item.id}
                                label={item.label}
                                placeholder={item.label}
                                error={errors?.[item.id] && touched?.[item.id] ? errors?.[item.id] ?? null : null}
                            />
                        )}
                        <button type="submit">Login</button>
                    </StyledLoginForm>)
                }
            </Formik>
        </FormWrapper>
    );
};