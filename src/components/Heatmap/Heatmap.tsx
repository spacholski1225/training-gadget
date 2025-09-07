import React from 'react';
import { DayRecord } from '../../lib/database';
import HeatmapDay from './HeatmapDay';
import { generateYearDates, getColorForDay } from './utils';

interface HeatmapProps {
  data: Map<string, DayRecord>;
  onDayClick: (date: string) => void;
  className?: string;
}

const Heatmap: React.FC<HeatmapProps> = ({ data, onDayClick, className }) => {
  const yearDates = generateYearDates();
  
  const getColorClass = (date: string) => {
    const dayData = data.get(date);
    return getColorForDay(dayData);
  };

  return (
    <div className={`heatmap-container ${className || ''}`}>
      <div className="grid grid-cols-7 gap-1 max-w-4xl mx-auto">
        {yearDates.map(date => (
          <HeatmapDay
            key={date}
            date={date}
            colorClass={getColorClass(date)}
            onClick={() => onDayClick(date)}
          />
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500 text-center">
        <div className="flex justify-between max-w-4xl mx-auto px-2">
          <span>365 dni temu</span>
          <span>Dziś</span>
        </div>
      </div>
    </div>
  );
};

export default Heatmap;