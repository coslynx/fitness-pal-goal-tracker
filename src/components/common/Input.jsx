t,
    placeholder,
    value,
    onChange,
    style,
    label,
    validation,
    error
  }) => {
  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e);
    } else {
      console.warn('onChange prop should be a function');
    }
  };

 const sanitizedValue = String(value);

  const inputStyle = {
    padding: style?.padding || '10px',
    border: style?.border || '1px solid #ccc',
    borderRadius: style?.borderRadius || '4px',
    outline: 'none',
    fontSize: style?.fontSize || '16px',
    ...style
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
     fontWeight: 'bold',
  };


  return (
    
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type={type || 'text'}
        placeholder={placeholder}
        value={sanitizedValue}
        onChange={handleChange}
        style={inputStyle}
       
      />
       {error && <div style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{error}</div>}
    
  );
};

export default React.memo(Input);