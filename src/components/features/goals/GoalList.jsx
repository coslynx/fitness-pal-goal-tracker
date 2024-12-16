{loading ? (
        
          Loading goals...
        
      ) : error ? (
        
          {error}
        
      ) : data ? (
        
          {data.map((goal) => (
            
          ))}
        
      ) : null}
    
  );
};

export default React.memo(GoalList);