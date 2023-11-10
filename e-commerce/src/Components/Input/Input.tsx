import React from 'react'

type IInput = {
  type: string,
  className: string,
  id: string,
  placeholder: string,
  value: string,
  handleChange: any
}

const Input = ({type, className, id, placeholder, value, handleChange}: IInput) => {
    return (
      <>
        <input
          type={type}
          className={className}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </>
    );
}

export default Input