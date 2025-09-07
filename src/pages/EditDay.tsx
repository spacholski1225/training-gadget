import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EditDay: React.FC = () => {
  const { date } = useParams<{ date: string }>();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Edytuj dzień: {date}
        </h1>
        <Link 
          to="/" 
          className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Powrót
        </Link>
      </div>
      <div className="text-gray-600">
        <p>Tutaj będzie formularz do edycji danych z wybranego dnia...</p>
        <p className="mt-2 text-sm">
          Komponent będzie implementowany w kolejnych sprintach.
        </p>
      </div>
    </div>
  );
};

export default EditDay;