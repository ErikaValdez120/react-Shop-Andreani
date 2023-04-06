import React from 'react'

const Input = ({ title , name, placeholder, value, type = 'text', onChange }) => {
  return (
    <div className='contenedor-label'>
      <label className='titulo-label'>{title}</label>

      <input
        className='inputForm'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
