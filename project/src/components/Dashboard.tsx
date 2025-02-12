import React, { useState } from 'react';
import { Activity, Pill, Apple, MessageCircle, TrendingUp, UserPlus } from 'lucide-react';
import HealthMetricsChart from './HealthMetricsChart';
import MedicationList from './MedicationList';
import DietRecommendations from './DietRecommendations';
import HealthForm from './HealthForm';

const Dashboard = () => {
  const [showHealthForm, setShowHealthForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">HealthCare AI</span>
            </div>
            <button
              onClick={() => setShowHealthForm(!showHealthForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              {showHealthForm ? 'View Dashboard' : 'Update Health Info'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showHealthForm ? (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Health Information</h2>
            <HealthForm />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Pill className="h-10 w-10 text-blue-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Active Medications</h3>
                    <p className="text-3xl font-bold">4</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-10 w-10 text-green-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Health Score</h3>
                    <p className="text-3xl font-bold">85%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <Apple className="h-10 w-10 text-red-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Diet Plan</h3>
                    <p className="text-3xl font-bold">Active</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <MessageCircle className="h-10 w-10 text-purple-600" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">AI Assistant</h3>
                    <p className="text-sm text-gray-500">Ask health questions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Health Metrics</h2>
                  <HealthMetricsChart />
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Current Medications</h2>
                  <MedicationList />
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4">Diet Recommendations</h2>
                  <DietRecommendations />
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;