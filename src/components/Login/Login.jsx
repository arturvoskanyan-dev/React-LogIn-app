import React, {useState} from 'react'
import CreateAccount from "../CreateAccount/CreateAccount";
import UserInfo from "../UserInfo/UserInfo";
import LoginInputs from "./LoginInputs/LoginInputs";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import style from "./Login.module.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState(false);

    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const [showPass, setShowPass] = useState(false);
    const [newData, setNewData] = useState([]);

    const [userInfo, setUserInfo] = useState(false);
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const submit = (e) => {
        e.preventDefault();
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr(false)
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
        setPassErr(false)
    }

    const login = (prevData, newData) => {
        const newUpdateDate = [...prevData, ...newData];
        newUpdateDate.map((elem) => {
            if(email === elem.email && password === elem.password)  {
                setUserInfo(true)
                setUserName(elem.name)
                setUserLastName(elem.lastName)
                setUserEmail(elem.email)
            }
        }) 
        setEmailErr(true)
        setPassErr(true)

        return newUpdateDate
    }

    const newAccount = (data) => {
        setAccount(prev => !prev)
        if (Array.isArray(data)) {
            const updateData = login(newData, data);
            setNewData(updateData);
        }
    }

    const changeEmailErr = () => {
        !email && setEmailErr(true)
    }

    const changePassErr = () => {
        !password && setPassErr(true)
    }

    const changeShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className={style.login}>
            {account ? <CreateAccount newAccount={newAccount} /> : null}
            {userInfo ?<UserInfo name={userName} lastName={userLastName} email={userEmail} /> : null}
            <form className={style.container} onSubmit={submit}>
                <div className={style.inputs}>
                    <LoginInputs 
                        className={emailErr ? style.warner : null}
                        value={email}
                        onChange={changeEmail}
                        onBlur={changeEmailErr}
                        placeholder="Email"
                    />

                    <div className={style.input_container}>
                        <LoginInputs 
                            className={passErr ? style.warner : null}
                            type={showPass ? "text" : "password"}
                            value={password}
                            onChange={changePassword}
                            onBlur={changePassErr}
                            placeholder="Password"
                        />
                        {
                            showPass 
                            ? <IoEyeSharp className={style.open} onClick={changeShowPass}/>
                            : <FaEyeSlash className={style.close} onClick={changeShowPass} />
                        }
                    </div>
                </div>
                <div className={style.actions}>
                    <button onClick={() => login(newData, newData)}>Log In</button>
                    <button onClick={newAccount} >Create new account</button>
                </div>
            </form>
        </div>
    )
}

export default Login
