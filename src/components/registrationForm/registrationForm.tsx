"use client"
import * as React from 'react';
import {Formik,} from 'formik';
import {StyledLoginForm} from "@/components/styledComponents/login/styledLoginForm";
import {FormField} from "@/components/common";
import {registrationFormSchema} from "@/components/registrationForm/registrationFormSchema";
import {StyledHeader} from "@/components/styledComponents/registration/styledRegistrationForm";
import {FormWrapper} from "@/components/styledComponents/common/styledFormWrapper";

interface MyFormValues {
    name: string;
    lastName: string;
    email: string;
    password: string
}

type TRegistrationForm = {
    label: string,
    fieldType: keyof MyFormValues
}

const fields: TRegistrationForm[] = [
    {
        fieldType: "name",
        label: "Name"
    },
    {
        fieldType: "lastName",
        label: "Last name"
    },
    {
        fieldType: "email",
        label: "E-mail"
    },
    {
        fieldType: "password",
        label: "Password"
    }
]

export const RegistrationForm = () => {
    const initialValues: MyFormValues = {name: '', lastName: '', email: '', password: ''};

    return (
        <FormWrapper>
            <StyledHeader>Sign Up</StyledHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={registrationFormSchema}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({errors, touched}) =>
                    (
                        <StyledLoginForm>
                            {fields.map((item) =>
                                <FormField
                                    key={item.fieldType}
                                    fieldType={item.fieldType}
                                    label={item.label}
                                    placeholder={item.label}
                                    error={errors?.[item.fieldType] && touched?.[item.fieldType] ? errors?.[item.fieldType] ?? null : null}
                                />
                            )}
                            <button type="submit">Submit</button>
                        </StyledLoginForm>
                    )
                }
            </Formik>
        </FormWrapper>
    );
};