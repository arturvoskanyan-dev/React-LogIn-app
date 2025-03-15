import { CreateAccount, UserInfo, Inputs, FaEyeSlash, IoEyeSharp, Formik, validiationSchema } from "../index"
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
                onSubmit={(values) => console.log(values)}
                validationSchema={validiationSchema}
            >
                {
                    ({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                        <form className={style.container} onSubmit={handleSubmit}>
                            <div className={style.inputs}>
                                {checking && <h3>Invalid Email or Password</h3>}
                                <Inputs
                                    className={errors.email && touched.email && style.warner}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Email"
                                    name="email"
                                />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                                <div className={style.input_container}>
                                    <Inputs
                                        className={errors.password && touched.password && style.warner}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Password"
                                        type={show ? "text" : "password"}
                                        name="password"
                                    />
                                    {show
                                    ? <IoEyeSharp className={style.open} onClick={() => setShow(!show)}/>
                                    : <FaEyeSlash className={style.close} onClick={() => setShow(!show)} />}
                                </div>
                                {errors.password && touched.password && <p>{errors.password}</p>}
                            </div>
                            <div className={style.actions}>
                                <button onClick={() => login(values)} type="submit">Log In</button>
                                <button onClick={newAccount} type="button">Create new account</button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Login