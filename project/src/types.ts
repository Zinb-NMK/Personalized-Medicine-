export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  medicalHistory: string[];
  allergies: string[];
  currentMedications: Medication[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
}

export interface HealthMetric {
  id: string;
  type: 'weight' | 'bloodSugar' | 'bloodPressure';
  value: number;
  unit: string;
  timestamp: string;
}

export interface DietRecommendation {
  id: string;
  title: string;
  description: string;
  foods: string[];
  restrictions: string[];
}