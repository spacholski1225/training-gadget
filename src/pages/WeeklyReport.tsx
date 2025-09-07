import React from 'react';

const WeeklyReport: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Raport Tygodniowy
      </h1>
      <div className="text-gray-600">
        <p>Tutaj będzie wyświetlany raport z ostatnich 7 dni...</p>
        <p className="mt-2 text-sm">
          Komponent będzie implementowany w kolejnych sprintach.
        </p>
      </div>
    </div>
  );
};

export default WeeklyReport;