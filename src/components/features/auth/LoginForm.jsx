import React, { useState } from 'react';
import Input from '../../common/Input.jsx';
import Button from '../../common/Button.jsx';
import { AuthContext } from '../../context/AuthContext.js';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = React.useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(username, password);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Login failed');
    }
  };

  return (
    
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         style={{marginBottom: '10px'}}
      />
      
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{marginBottom: '10px'}}
      />
       {error && <div style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{error}</div>}
      <Button
        text="Login"
        onClick={handleSubmit}
        disabled={loading}
         style={{marginTop: '10px', backgroundColor: '#007bff', color: 'white', padding: '10px 20px'}}
      />
    
  );
};

export default React.memo(LoginForm);