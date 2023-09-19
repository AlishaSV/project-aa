import * as Yup from "yup";

export const registrationFormSchema = Yup.object().shape({
    name: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(7),
});