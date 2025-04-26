import React, { useState } from 'react';

function Disease() {
  const [features, setFeatures] = useState(['', '', '', '']);
  const [prediction, setPrediction] = useState(null);

  const handleChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const getPrediction = async () => {
    const numericFeatures = features.map(parseFloat);
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ features: numericFeatures }),
    });
    const result = await response.json();
    setPrediction(result.prediction);
  };

  return (
    <div>
      <h2>Enter Features</h2>
      {features.map((feature, index) => (
        <input
          key={index}
          type="text"
          value={feature}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Feature ${index + 1}`}
        />
      ))}
      <button onClick={getPrediction}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default Disease;
