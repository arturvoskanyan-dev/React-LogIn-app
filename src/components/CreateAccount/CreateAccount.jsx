import React, { useState } from "react"
import Inputs from "./Inputs/Inputs";
import style from "./CreateAccount.module.css"

function CreateAccount({ newAccount }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameErr, setNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const changeName = (e) => {
        setName(e.target.value)
        setNameErr(false);
    };

    const changeLastName = (e) => {
        setLastName(e.target.value);
        setLastNameErr(false);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr(false);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
        setPasswordErr(false);
    };

    const invalid = () => {
        let isValid = true;

        if (!name) {
            setNameErr(true);
            isValid = false
        }

        if (!lastName) {
            setLastNameErr(true);
            isValid = false
        }

        if (!email) {
            setEmailErr(true)
            isValid = false
        }

        if (!password) {
            setPasswordErr(true)
            isValid = false
        }

        return isValid
    };

    const createNewAccount = () => {
        if (!invalid()) {
            return
        }

        const userData = { name, lastName, email, password }
        newAccount([userData])
    };

    const btnClick = () => {
        createNewAccount();
    }

    return (
        <div className={style.new_account}>
            <div className={style.container}>
                <article className={style.title}>
                    <h3>Create a new account</h3>
                    <p>It’s quick and easy.</p>
                </article>
                <div className={style.create_account}>
                    <Inputs 
                        className={nameErr ? style.warner : ""}
                        type="text"
                        value={name}
                        onChange={changeName}
                        onBlur={() => !name && setNameErr(true)}
                        placeholder="Name"
                    />
                    <Inputs 
                        className={lastNameErr ? style.warner : ""}
                        type="text"
                        value={lastName}
                        onChange={changeLastName}
                        onBlur={() => !lastName && setLastNameErr(true)}
                        placeholder="Last Name"
                    />
                    <Inputs 
                        className={emailErr ? style.warner : ""}
                        type="email"
                        value={email}
                        onChange={changeEmail}
                        onBlur={() => !email && setEmailErr(true)}
                        placeholder="Email"
                    />
                    <Inputs 
                        className={passwordErr ? style.warner : ""}
                        type="password"
                        value={password}
                        onChange={changePassword}
                        onBlur={() => !password && setPasswordErr(true)}
                        placeholder="Password"
                    />
                </div>
                <div className={style.actions}>
                    <button onClick={btnClick}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount
