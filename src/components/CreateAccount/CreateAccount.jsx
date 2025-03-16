import { Formik, ErrorMessage, Form, Field } from "formik";
import { validiationSchema } from "../index"
import style from "./CreateAccount.module.css"

function CreateAccount({ newAccount }) {
    return (
        <div className={style.new_account}>
            <div className={style.container}>
                <article className={style.title}>
                    <h3>Create a new account</h3>
                    <p>It’s quick and easy.</p>
                </article>
                <Formik
                    initialValues={{
                        id: Date.now(),
                        name: "",
                        lastName: "",
                        email: "",
                        password: ""
                    }}
                    onSubmit={(values) => newAccount([values])}
                    validationSchema={validiationSchema}
                >
                    {
                        ({ errors, touched }) => (
                            <Form className={style.create_account}>
                                <Field
                                    className={errors.name && touched.name && style.warner}
                                    placeholder="Name"
                                    name="name"
                                />
                                <p><ErrorMessage name="name" /></p>
                                <Field
                                    className={errors.lastName && touched.lastName && style.warner}
                                    placeholder="LastName"
                                    name="lastName"
                                />
                                <p><ErrorMessage name="lastName" /></p>
                                <Field
                                    className={errors.email && touched.email && style.warner}
                                    placeholder="Email"
                                    name="email"
                                />
                                <p><ErrorMessage name="email" /></p>
                                <Field
                                    className={errors.password && touched.password && style.warner}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                                <p><ErrorMessage name="password" /></p>
                                <div className={style.actions}>
                                    <button type="submit">Sign Up</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default CreateAccount