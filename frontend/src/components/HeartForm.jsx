import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HeartForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict-heart', formData);
      navigate('/result', { state: { prediction: response.data.prediction_text } });
    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="number"
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default HeartForm;
