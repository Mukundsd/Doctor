import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Prepare the data to send
  const formattedData = {
    age: Number(formData.age),
    sex: Number(formData.sex),
    cp: Number(formData.cp),
    trestbps: Number(formData.trestbps),
    chol: Number(formData.chol),
    fbs: Number(formData.fbs),
    restecg: Number(formData.restecg),
    thalach: Number(formData.thalach),
    exang: Number(formData.exang),
    oldpeak: Number(formData.oldpeak),
    slope: Number(formData.slope),
    ca: Number(formData.ca),
    thal: Number(formData.thal),
  };

  try {
    // Make a POST request to the backend for prediction
    const response = await axios.post("http://127.0.0.1:5000/", formattedData);

    // Navigate to result page with the prediction
    navigate("/prediction-result", {
      state: { prediction: response.data.prediction_text },
    });
  } catch (error) {
    console.error("Error during prediction:", error);
  }
};
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Heart Disease Prediction Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200"
            />
          </div>
        ))}
        <div className="col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Predict
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
