import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { prediction } = location.state || { prediction: "No result" };  // Default if no result

  return (
    <div>
      <h2>Prediction Result</h2>
      <p>{prediction}</p>
    </div>
  );
};

export default Result;
