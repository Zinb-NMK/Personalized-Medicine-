import React from 'react';

const mockData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Blood Pressure',
      data: [120, 122, 119, 121, 118, 120, 121],
    },
    {
      label: 'Blood Sugar',
      data: [95, 98, 92, 95, 94, 93, 96],
    },
  ],
};

const HealthMetricsChart = () => {
  return (
    <div className="relative">
      <div className="h-64 flex items-end space-x-2">
        {mockData.datasets[0].data.map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ height: `${(value - 110) * 5}px` }}
            />
            <span className="text-sm text-gray-600 mt-2">{mockData.labels[index]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
          <span className="text-sm text-gray-600">Blood Pressure</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
          <span className="text-sm text-gray-600">Blood Sugar</span>
        </div>
      </div>
    </div>
  );
};

export default HealthMetricsChart;