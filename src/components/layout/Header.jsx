import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ style, logo, navigationItems, profile }) => {
   const headerStyle = {
    backgroundColor: style?.backgroundColor || '#f0f0f0',
    color: style?.color || '#333',
    padding: style?.padding || '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...style
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px',
    ...style?.logo
  };

 const navStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    ...style?.nav
  };

  const navItemStyle = {
    margin: '0 10px',
      ...style?.navItem
  };

    const profileStyle = {
    marginRight: '10px',
      ...style?.profile
  };

  const sanitizedLogo = String(logo);
  const sanitizedProfile = String(profile);

  return (
    
      
        
          {sanitizedLogo}
        
        
          {navigationItems && navigationItems.map((item, index) => (
            
              
                {item.text}
              
            
          ))}
        
        
          {sanitizedProfile}
        
      
    
  );
};

export default React.memo(Header);