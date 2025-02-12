# 🏥 Healthcare Medication Predictor
A full-stack Healthcare Application that predicts suitable medications based on patient health data. Built with FastAPI, React, MongoDB, and Tailwind CSS, this system helps healthcare providers manage patient data and receive medication recommendations.

## Project Status
🚧 **Under Development** 🚧  
- Current focus: Data collection, model training, and API integration.  
- Planned features: User authentication, real-time health metrics monitoring, and enhanced recommendation algorithms.

Feel free to explore and contribute!

# 🚀 Features
- 📝 Patient Data Management: Save and retrieve patient records.
- 💊 Medication Prediction: Provides medication suggestions using a machine learning model.
- 📊 Health Metrics Visualization: Display blood pressure and blood sugar trends.
- 🥗 Diet Recommendations: Personalized diet advice for patients.

# 🛠 Tech Stack
Backend  
- FastAPI – High-performance web framework  
- MongoDB – NoSQL database for data storage  
- Python – Core language for ML and backend  
- pandas, scikit-learn, NumPy – Data processing and model building

Frontend  
- React – Modern UI framework  
- TypeScript – For type-safe development  
- Tailwind CSS – Utility-first CSS framework

# 📦 Installation and Setup
Prerequisites  
- Python 3.10+  
- Node.js and npm  
- MongoDB (locally or cloud-hosted)
Backend Setup:-

### 1. Clone the repository:  
```bash
git clone https://github.com/username/healthcare-medication-predictor.git  
cd healthcare-medication-predictor  
```

### 2. Install dependencies:  
```bash
pip install -r requirements.txt  
```

### 3. Run the backend server:  
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload  
```

# API Endpoints  

### 1. `POST /predict-medication`  
**Description:** Predicts medication based on patient data.  

**Request Body:**  
```json
{
  "age": 45,
  "gender": "male",
  "weight": 70,
  "height": 170,
  "blood_pressure": "120/80",
  "blood_sugar": 95.0,
  "allergies": ["penicillin"],
  "existing_conditions": ["diabetes"],
  "current_medications": ["metformin"]
}
```

**Response:**  
```json
{
  "prediction": "Atorvastatin"
}
```

### 2. `GET /patient/{patient_id}`  
**Description:** Retrieves the data for a specific patient by their ID.


## Health Metrics Dashboard:-<h2></h2>

![Dashbord](https://github.com/Zinb-NMK/Personalized-Medicine-/blob/6ede034a8f2af68862bd0604a6c8b2d173fb8a60/Project%20Outputs/Dashbord.png)

## Dite Recommendation & Current Medication:-

![Dashbord](https://github.com/Zinb-NMK/Personalized-Medicine-/blob/6ede034a8f2af68862bd0604a6c8b2d173fb8a60/Project%20Outputs/Diet%20Recommendation.png)
![Dashbord](https://github.com/Zinb-NMK/Personalized-Medicine-/blob/6ede034a8f2af68862bd0604a6c8b2d173fb8a60/Project%20Outputs/Current%20Medication.png)

## Health Information(Input):-

![Dashbord](https://github.com/Zinb-NMK/Personalized-Medicine-/blob/6ede034a8f2af68862bd0604a6c8b2d173fb8a60/Project%20Outputs/Medical%20out%20-4.png)

📚 Dependencies:

### fastapi==0.103.1
### uvicorn==0.23.2
### pymongo==4.5.0
### scikit-learn==1.3.0
### numpy==1.24.3
### pandas==2.0.3
### python-dotenv==1.0.0
### pydantic==2.3.0

### 💡 Future Enhancements
### 🔒 Authentication and Role-based Access Control
### 📱 Mobile-friendly Design
### 🤖 Advanced Machine Learning Models for more accurate predictions

## 📜 License
  This project is licensed under the MIT License.

## 👨‍💻 Author  
**Nagaram ManojKumar**  
Aspiring AI/ML Developer | B.Tech (CSE, AI & ML) at Parul University

## 📞 Contact  
- 📧 Email: [nagarammanojkumar333@gmail.com](mailto:your-email@example.com)  
- 🌐 LinkedIn: [linkedin.com/in/manojkumar-nagaram-1a2236321](https://linkedin.com/in/your-profile)  
Feel free to reach out for collaborations, queries, or any discussions about AI/ML!

