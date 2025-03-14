const Inputs = ({className, type, value, onChange, onBlur, placeholder, name}) => {
  return (
    <>
      <input 
        className={className} 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        placeholder={placeholder}
        name={name}
      />
    </>
  )
}

export default Inputs