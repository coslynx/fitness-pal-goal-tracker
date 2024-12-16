padding: '10px',
    border: '1px solid #eee',
    borderRadius: '8px',
     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
     marginBottom: '10px',
     ...style
  };\n  const sanitizedTitle = String(goal?.title);\n  const sanitizedDescription = String(goal?.description);\n\n  return (\n    \n        \n          {sanitizedTitle}\n        \n        \n          {sanitizedDescription}\n        \n    \n  );\n};\n\nexport default React.memo(GoalCard);