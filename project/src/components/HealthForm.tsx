import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface HealthFormData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  bloodPressure: string;
  bloodSugar: string;
  allergies: string;
  existingConditions: string;
  currentMedications: string;
}

const HealthForm = () => {
  const [formData, setFormData] = useState<HealthFormData>({
    age: '',
    gender: '',
    weight: '',
    height: '',
    bloodPressure: '',
    bloodSugar: '',
    allergies: '',
    existingConditions: '',
    currentMedications: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    console.log('Health data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            max="120"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            step="0.1"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Pressure (mmHg)</label>
          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            placeholder="120/80"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Sugar (mg/dL)</label>
          <input
            type="number"
            name="bloodSugar"
            value={formData.bloodSugar}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Allergies</label>
        <textarea
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any allergies..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Existing Medical Conditions</label>
        <textarea
          name="existingConditions"
          value={formData.existingConditions}
          onChange={handleChange}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List any existing medical conditions..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Medications</label>
        <textarea
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List current medications with dosage..."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Health Information
        </button>
      </div>
    </form>
  );
};

export default HealthForm;