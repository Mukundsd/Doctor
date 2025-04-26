from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = data.get('features')
    return jsonify({'prediction': sum(features)})  # Mock prediction

if __name__ == '__main__':
    app.run(debug=True)
