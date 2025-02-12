from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from models.medication_predictor import MedicationPredictor
from database.mongodb_client import MongoDB
from typing import List, Optional
import uvicorn

app = FastAPI()
db = MongoDB()
predictor = MedicationPredictor()

class PatientData(BaseModel):
    age: int
    gender: str
    weight: float
    height: float
    blood_pressure: str
    blood_sugar: float
    allergies: List[str]
    existing_conditions: List[str]
    current_medications: List[str]

@app.post("/predict-medication")
async def predict_medication(patient_data: PatientData):
    try:
        # Save patient data
        patient_record = patient_data.dict()
        db_response = db.save_patient_data(patient_record)
        
        # Prepare data for prediction
        prediction_input = {
            'age': patient_data.age,
            'gender': patient_data.gender,
            'weight': patient_data.weight,
            'height': patient_data.height,
            'blood_pressure': patient_data.blood_pressure,
            'blood_sugar': patient_data.blood_sugar
        }
        
        # Get prediction
        prediction = predictor.predict(prediction_input)
        
        # Save prediction
        prediction_record = {
            'patient_id': str(db_response.inserted_id),
            'prediction': prediction
        }
        db.save_prediction(prediction_record)
        
        return prediction
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/patient/{patient_id}")
async def get_patient(patient_id: str):
    patient = db.get_patient_data(patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)