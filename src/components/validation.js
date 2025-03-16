import * as yup from "yup"

export const validiationSchema = yup.object().shape({

    name: yup.string()
    .matches(/[A-Z]/, "the first letter must be uppercase")
    .min(4, "The minimum number of characters must be 4.")
    .required("Name is Required!"),

    lastName: yup.string()
    .matches(/[A-Z]/, "the first letter must be uppercase")
    .min(4, "The minimum number of characters must be 4.")
    .required("LastName is Required!"),

    email : yup.string()
    .email()
    .required("Email is Required!"),

    password : yup.string()
    .min(4, "The minimum number of characters must be 4.")
    .max(12, "The minimum number of characters must be 12")
    .required("Password is Required!")
    
})