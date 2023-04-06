const Select = ({
  title,
  name,
  defaultValue,
  TitleoptionDefault,
  onChange,
  children,
  disabled = 0,
}) => {
  return (
    <div className='select-container'>
      <label className='titulo-label'>{title}</label>
      <select
        className='selectForm'
        onChange={onChange}
        name={name}
        id={name}
        defaultValue={defaultValue}
      >
        <option disabled={disabled === 0} value={defaultValue}>
          {TitleoptionDefault}
        </option>
        {children}
      </select>
    </div>
  )
}

export default Select
