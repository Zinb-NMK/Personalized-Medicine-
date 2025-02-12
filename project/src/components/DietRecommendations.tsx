import React from 'react';
import { Check } from 'lucide-react';

const mockRecommendations = [
  {
    title: 'Recommended Foods',
    items: [
      'Leafy greens',
      'Lean proteins',
      'Whole grains',
      'Low-fat dairy',
    ],
  },
  {
    title: 'Foods to Avoid',
    items: [
      'High sodium foods',
      'Processed sugars',
      'Saturated fats',
    ],
  },
];

const DietRecommendations = () => {
  return (
    <div className="space-y-4">
      {mockRecommendations.map((section, index) => (
        <div key={index}>
          <h3 className="font-medium mb-2">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DietRecommendations;