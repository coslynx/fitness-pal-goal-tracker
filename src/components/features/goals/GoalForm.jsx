placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{marginBottom: '10px'}}
      />
      {error && <div style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{error}</div>}
      <Button
        text="Submit"
        onClick={handleSubmit}
        disabled={loading}
        style={{marginTop: '10px', backgroundColor: '#007bff', color: 'white', padding: '10px 20px'}}
      />
    
  );
};

export default React.memo(GoalForm);