import Dexie, { Table } from 'dexie';

export interface DayRecord {
  id?: number;
  date: string; // YYYY-MM-DD
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
  duration?: number; // minutes
  weight?: number; // kg
}

class AppDatabase extends Dexie {
  days!: Table<DayRecord>;

  constructor() {
    super('DietTrainingDB');
    this.version(1).stores({
      days: '++id, date, calorieDeficit, training, steps, createdAt'
    });
  }
}

export const db = new AppDatabase();

export const saveDayData = async (dayData: Omit<DayRecord, 'id'>) => {
  await db.days.put({
    ...dayData,
    updatedAt: new Date()
  });
};

export const getDayData = async (date: string): Promise<DayRecord | undefined> => {
  return await db.days.where('date').equals(date).first();
};

export const getWeekData = async (startDate: string, endDate: string): Promise<DayRecord[]> => {
  return await db.days
    .where('date')
    .between(startDate, endDate, true, true)
    .toArray();
};

export const getAllData = async (): Promise<DayRecord[]> => {
  return await db.days.toArray();
};