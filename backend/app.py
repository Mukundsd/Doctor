from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import os

app = Flask(__name__)
CORS(app)

# Load all models with error handling
model_paths = {
    "heart": 'mlModel/heart.pkl',
    "diabetes": 'mlModel/diabetes.pkl',
    "liver": 'mlModel/liver.pkl',
    "parkinsons": 'mlModel/parkinsons.pkl',
    "breast_cancer": 'mlModel/breast_cancer.pkl'
}

models = {}

for disease, model_path in model_paths.items():
    try:
        with open(os.path.join(os.path.dirname(__file__), model_path), 'rb') as f:
            models[disease] = pickle.load(f)
    except Exception as e:
        print(f"Error loading model for {disease}: {e}")
        models[disease] = None

# Prediction Routes
@app.route('/predict-<disease>', methods=['POST'])
def predict_disease(disease):
    if disease not in models or models[disease] is None:
        return jsonify({'error': f"Model for {disease} is not available."})

    try:
        data = request.json
        input_features = [list(data.values())]  # Use the input data directly for prediction
        prediction = models[disease].predict(input_features)
        result = f"{disease.capitalize()} Detected" if prediction[0] == 1 else f"No {disease.capitalize()}"

        return jsonify({'prediction_text': result})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
