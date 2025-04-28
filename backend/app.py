from flask import Flask, request, jsonify
from flask_cors import CORS  # 👈 Add this line
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # 👈 Add this line to allow CORS from any frontend

# Load your model
model = pickle.load(open('models/heart.pkl', 'rb'))

@app.route('/', methods=['POST'])
def predict():
    data = request.json
    input_features = np.array([
        float(data['age']),
        float(data['sex']),
        float(data['cp']),
        float(data['trestbps']),
        float(data['chol']),
        float(data['fbs']),
        float(data['restecg']),
        float(data['thalach']),
        float(data['exang']),
        float(data['oldpeak']),
        float(data['slope']),
        float(data['ca']),
        float(data['thal'])
    ]).reshape(1, -1)
    
    prediction = model.predict(input_features)
    output = "Heart Disease Detected" if prediction[0] == 1 else "No Heart Disease"
    
    return jsonify({'prediction_text': output})

if __name__ == "__main__":
    app.run(debug=True)
