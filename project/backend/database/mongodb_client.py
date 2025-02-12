from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

class MongoDB:
    def __init__(self):
        self.client = MongoClient(os.getenv('MONGODB_URI'))
        self.db = self.client['healthcare_db']
        
    def save_patient_data(self, data):
        return self.db.patients.insert_one(data)
        
    def get_patient_data(self, patient_id):
        return self.db.patients.find_one({'_id': patient_id})
        
    def update_patient_data(self, patient_id, data):
        return self.db.patients.update_one(
            {'_id': patient_id},
            {'$set': data}
        )
        
    def save_prediction(self, prediction_data):
        return self.db.predictions.insert_one(prediction_data)
        
    def get_patient_predictions(self, patient_id):
        return list(self.db.predictions.find({'patient_id': patient_id}))