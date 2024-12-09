import React from 'react'

function InputField({type, name, placeholder, onChange, value, required, className}) {
  return (
   <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    required={required}
    className={className}
   />
  )
}

export default InputField
