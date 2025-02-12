import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import joblib

class MedicationPredictor:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.label_encoder = LabelEncoder()
        
    def preprocess_data(self, data):
        # Convert categorical variables
        categorical_features = ['gender', 'blood_pressure_category', 'diabetes_status']
        for feature in categorical_features:
            if feature in data.columns:
                data[feature] = self.label_encoder.fit_transform(data[feature])
        return data
        
    def train(self, X, y):
        X_processed = self.preprocess_data(X)
        self.model.fit(X_processed, y)
        
    def predict(self, patient_data):
        processed_data = self.preprocess_data(pd.DataFrame([patient_data]))
        prediction = self.model.predict(processed_data)
        probabilities = self.model.predict_proba(processed_data)
        return {
            'recommended_medication': prediction[0],
            'confidence': float(np.max(probabilities[0]))
        }
        
    def save_model(self, path):
        joblib.dump(self.model, path)
        
    def load_model(self, path):
        self.model = joblib.load(path)