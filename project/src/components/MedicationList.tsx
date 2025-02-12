import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const mockMedications = [
  {
    name: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    nextDose: '2 hours',
    warning: 'Take with food',
  },
  {
    name: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    nextDose: '5 hours',
    warning: null,
  },
  {
    name: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once daily',
    nextDose: '8 hours',
    warning: 'Avoid grapefruit',
  },
];

const MedicationList = () => {
  return (
    <div className="space-y-4">
      {mockMedications.map((med, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{med.name}</h3>
              <p className="text-sm text-gray-500">{med.dosage} - {med.frequency}</p>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {med.nextDose}
            </div>
          </div>
          {med.warning && (
            <div className="mt-2 flex items-center text-sm text-amber-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              {med.warning}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MedicationList;