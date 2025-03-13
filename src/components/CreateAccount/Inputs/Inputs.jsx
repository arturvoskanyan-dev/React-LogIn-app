import React from 'react'

const Inputs = ({ className, type, value, onChange, onBlur, placeholder }) => {
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

export default Inputs
