import {Inputs, Formik, validiationSchema} from "../index"
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
                    onSubmit={(values) => {
                        const newData = [values];
                        return newAccount(newData)
                    }}
                    validationSchema={validiationSchema}
                >
                    {
                        ({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
                            <form className={style.create_account} onSubmit={handleSubmit}>
                                <Inputs 
                                    className={errors.name && touched.name && style.warner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Name"
                                    value={values.name}
                                    name="name"
                                />
                                {errors.name && touched.name && <p>{errors.name}</p>}
                                <Inputs 
                                    className={errors.lastName && touched.lastName && style.warner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="LastName"
                                    value={values.lastName}
                                    name="lastName"
                                />
                                {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
                                <Inputs 
                                    className={errors.email && touched.email && style.warner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Email"
                                    value={values.email}
                                    name="email"
                                />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                                <Inputs 
                                    className={errors.password && touched.password && style.warner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Password"
                                    value={values.password}
                                    type="password"
                                    name="password"
                                />
                                {errors.password && touched.password && <p>{errors.password}</p>}

                                <div className={style.actions}>
                                    <button type="submit">Sign Up</button>
                                </div>  
                            </form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default CreateAccount