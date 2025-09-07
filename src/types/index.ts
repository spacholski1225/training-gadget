export interface DayRecord {
  id?: number;
  date: string;
  calorieDeficit: boolean;
  training: boolean;
  steps: number;
  exercises?: Exercise[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Exercise {
  id: string;
  name: string;
  reps?: number;
  duration?: number;
  weight?: number;
}

export type HeatmapColor = 'green' | 'orange' | 'gray';