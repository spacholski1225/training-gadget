import React from 'react';
import DailyForm from '../components/DailyForm/DailyForm';
import Heatmap from '../components/Heatmap/Heatmap';

const Home: React.FC = () => {
  const handleDayClick = (date: string) => {
    window.location.href = `/edit/${date}`;
  };

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Dzisiejszy dzień
        </h2>
        <DailyForm />
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Heatmapa (365 dni)
        </h2>
        <Heatmap data={new Map()} onDayClick={handleDayClick} />
        
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
            <span>Dieta + Trening</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
            <span>Jedno z dwóch</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
            <span>Brak danych</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;