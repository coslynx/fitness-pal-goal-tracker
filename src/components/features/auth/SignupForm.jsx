const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signup } = React.useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
     if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      await signup(username, password);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Signup failed');
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
       
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
         style={{marginBottom: '10px'}}
      />
      {error && <div style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{error}</div>}
      <Button
        text="Signup"
        onClick={handleSubmit}
        disabled={loading}
        style={{marginTop: '10px', backgroundColor: '#007bff', color: 'white', padding: '10px 20px'}}
      />
    
  );
};

export default React.memo(SignupForm);