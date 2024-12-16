import React from 'react';

const Button = ({ text, onClick, style, disabled }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else {
      console.warn('onClick prop should be a function');
    }
  };

  const sanitizedText = String(text);

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: style?.backgroundColor || '#4CAF50',
    color: style?.color || 'white',
    padding: style?.padding || '10px 20px',
    border: style?.border || 'none',
    borderRadius: style?.borderRadius || '5px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    outline: 'none',
    ...style
  };


  return (
      <button
        style={buttonStyle}
        onClick={handleClick}
        disabled={disabled}
      >
        {sanitizedText}
      </button>
  );
};

export default React.memo(Button);