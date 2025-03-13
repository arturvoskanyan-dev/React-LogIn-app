import React from 'react'
import style from "./LoginInputs.module.css"

const LoginInputs = ({className, type, value, onChange, onBlur, placeholder}) => {
  return (
    <>
      <input 
        className={className} 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        placeholder={placeholder}
      />
    </>
  )
}

export default LoginInputs
