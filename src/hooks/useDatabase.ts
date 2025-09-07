import { useState, useEffect } from 'react';
import { DayRecord, getDayData, saveDayData, getAllData } from '../lib/database';

export const useDayData = (date: string) => {
  const [dayData, setDayData] = useState<DayRecord | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDayData = async () => {
      try {
        setLoading(true);
        const data = await getDayData(date);
        setDayData(data);
      } catch (err) {
        setError('Błąd podczas pobierania danych');
        console.error('Error fetching day data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDayData();
  }, [date]);

  const saveDayDataHandler = async (data: Omit<DayRecord, 'id'>) => {
    try {
      await saveDayData(data);
      setDayData({ ...data, id: dayData?.id });
      return true;
    } catch (err) {
      setError('Błąd podczas zapisywania danych');
      console.error('Error saving day data:', err);
      return false;
    }
  };

  return { dayData, loading, error, saveDayData: saveDayDataHandler };
};

export const useAllData = () => {
  const [allData, setAllData] = useState<Map<string, DayRecord>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const data = await getAllData();
        const dataMap = new Map<string, DayRecord>();
        data.forEach(record => {
          dataMap.set(record.date, record);
        });
        setAllData(dataMap);
      } catch (err) {
        setError('Błąd podczas pobierania danych');
        console.error('Error fetching all data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const refreshData = async () => {
    try {
      const data = await getAllData();
      const dataMap = new Map<string, DayRecord>();
      data.forEach(record => {
        dataMap.set(record.date, record);
      });
      setAllData(dataMap);
    } catch (err) {
      console.error('Error refreshing data:', err);
    }
  };

  return { allData, loading, error, refreshData };
};