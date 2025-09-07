import React, { useState } from 'react';
import { saveDayData } from '../../lib/database';

const DailyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    calorieDeficit: false,
    training: false,
    steps: 0
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const today = new Date().toISOString().split('T')[0];
      
      await saveDayData({
        date: today,
        ...formData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      
      setMessage('Dane zostały zapisane pomyślnie!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Błąd podczas zapisywania danych');
      console.error('Error saving day data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = () => {
    const today = new Date();
    return today.toLocaleDateString('pl-PL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-lg font-medium text-gray-700 mb-4">
        Data: {formatDate()}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="deficit"
            checked={formData.calorieDeficit}
            onChange={(e) => setFormData(prev => ({ ...prev, calorieDeficit: e.target.checked }))}
            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="deficit" className="text-sm font-medium text-gray-700">
            Deficyt kaloryczny
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="training"
            checked={formData.training}
            onChange={(e) => setFormData(prev => ({ ...prev, training: e.target.checked }))}
            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="training" className="text-sm font-medium text-gray-700">
            Dzień treningowy
          </label>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="steps" className="text-sm font-medium text-gray-700">
          Liczba kroków
        </label>
        <input
          type="number"
          id="steps"
          min="0"
          max="100000"
          value={formData.steps}
          onChange={(e) => setFormData(prev => ({ ...prev, steps: parseInt(e.target.value) || 0 }))}
          placeholder="np. 8000"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-green-600 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          {isSubmitting ? 'Zapisywanie...' : 'Zapisz dzień'}
        </button>
        
        {message && (
          <div className={`text-sm ${message.includes('pomyślnie') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
      </div>
    </form>
  );
};

export default DailyForm;