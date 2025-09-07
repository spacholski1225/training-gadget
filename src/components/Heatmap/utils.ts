import { DayRecord } from '../../lib/database';
import { HeatmapColor } from '../../types';

export const generateYearDates = (): string[] => {
  const dates: string[] = [];
  const today = new Date();
  
  // Start from 365 days ago
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
};

export const getColorForDay = (dayData?: DayRecord): string => {
  if (!dayData) {
    return 'heatmap-day-gray';
  }
  
  const { calorieDeficit, training } = dayData;
  
  if (calorieDeficit && training) {
    return 'heatmap-day-green';
  } else if (calorieDeficit || training) {
    return 'heatmap-day-orange';
  } else {
    return 'heatmap-day-gray';
  }
};

export const getColorType = (dayData?: DayRecord): HeatmapColor => {
  if (!dayData) {
    return 'gray';
  }
  
  const { calorieDeficit, training } = dayData;
  
  if (calorieDeficit && training) {
    return 'green';
  } else if (calorieDeficit || training) {
    return 'orange';
  } else {
    return 'gray';
  }
};