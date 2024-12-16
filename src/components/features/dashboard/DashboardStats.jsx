import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch.js';
import { AuthContext } from '../../context/AuthContext.js';

const DashboardStats = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data, loading: fetchLoading, error: fetchError } = useFetch('/api/dashboard');
  const { isAuthenticated } = React.useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(fetchLoading);
      setError(fetchError || '');
    } else {
      setLoading(false);
      setError('');
    }
  }, [isAuthenticated, fetchLoading, fetchError]);

  const containerStyle = {
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const errorStyle = {
      color: 'red',
      marginTop: '10px'
  }

  return (
    
      {loading ? (
        
          Loading dashboard statistics...
        
      ) : error ? (
        
          {error}
        
      ) : data ? (
        
           Total Goals: {data.totalGoals}
           Completed Goals: {data.completedGoals}
           Average Progress: {data.averageProgress}
        
      ) : null}
    
  );
};

export default React.memo(DashboardStats);