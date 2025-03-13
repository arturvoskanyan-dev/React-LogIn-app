import React, {useState} from 'react'
import Intro from "../Intro/Intro"
import Login from '../Login/Login'
import style from "./Box.module.css"

export default function Box() {
  return (
    <div className={style.box}>
        <Intro />
        <Login />
    </div>
  )
}
