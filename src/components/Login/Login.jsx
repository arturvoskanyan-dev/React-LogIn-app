import { CreateAccount, UserInfo, FaEyeSlash, IoEyeSharp, validiationSchema } from "../index"
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from 'react'
import style from "./Login.module.css"

function Login() {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState(false);
    const [user, setUser] = useState(false); 
    const [checking, setChecking] = useState(false);

    const [data, setData] = useState([]);

    const login = (values) => {
        data.find((elem) => {
            if(elem.email == values.email && elem.password == values.password) {
                setUser(true)
            } else {
                setChecking(true)
            }
        })
    }

    const newAccount = (data) => {
        setAccount(prev => !prev)
        if (Array.isArray(data)) {
            setData(data)
        }
    }

    return (
        <div className={style.login}>
            {account ? <CreateAccount newAccount={newAccount} /> : null}
            {user ?<UserInfo data={data.find((elem) => elem)} /> : null}
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={validiationSchema}
            >
                {
                    ({ values, errors, touched }) => (
                        <Form className={style.container}>
                            <div className={style.inputs}>
                                {checking && <h3>Invalid Email or Password</h3>}
                                <Field
                                    className={errors.email && touched.email && style.warner}
                                    placeholder="Email"
                                    name="email"
                                />
                                <p><ErrorMessage name="email" /></p>
                                <div className={style.input_container}>
                                    <Field 
                                        className={errors.password && touched.password && style.warner}
                                        placeholder="Password"
                                        type={show ? "text" : "password"}
                                        name="password"
                                    /> 
                                    {show
                                    ? <IoEyeSharp className={style.open} onClick={() => setShow(!show)}/>
                                    : <FaEyeSlash className={style.close} onClick={() => setShow(!show)} />}
                                </div>
                                <p><ErrorMessage name="password" /></p>
                            </div>
                            <div className={style.actions}>
                                <button onClick={() => login(values)} type="submit">Log In</button>
                                <button onClick={newAccount} type="button">Create new account</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Login