const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
     if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event) => {
    if (backdropClickCloses && event.target === modalRef.current) {
          onClose();
        }
  }

    const sanitizedHeader = String(header);
     const sanitizedFooter = String(footer);
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    ...style
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    ...style?.content,
    overflow: 'auto',
    maxHeight: '90vh',
  };

const headerStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee',
    fontSize: '18px',
    fontWeight: 'bold',
    ...style?.header
  };

  const footerStyle = {
    padding: '10px',
    textAlign: 'right',
    borderTop: '1px solid #eee',
    ...style?.footer
  };

  return isOpen ? (
    
        
          {sanitizedHeader && <div style={headerStyle}>{sanitizedHeader}</div>}
            {children}
           {sanitizedFooter && <div style={footerStyle}>{sanitizedFooter}</div>}
        
    
  ) : null;
};

export default React.memo(Modal);