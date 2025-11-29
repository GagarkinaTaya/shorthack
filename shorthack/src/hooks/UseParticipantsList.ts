import { useState, useEffect } from 'react';
import { getParticipants } from '../api/participants';
import type { Participant } from '../types/participant';

interface UseParticipantsListResult {
  participants: Participant[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useParticipantsList(): UseParticipantsListResult {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchParticipants = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // 🔴 ВРЕМЕННАЯ ЗАГЛУШКА - раскомментируй для тестирования без бэкенда
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockParticipants: Participant[] = [
        {
          id: '1',
          firstname: 'Иван',
          lastname: 'Иванов',
          email: 'ivan@example.com',
          accessCode: '12345',
          createdAt: new Date().toISOString()
        },
        {
          id: '2', 
          firstname: 'Петр',
          lastname: 'Петров',
          email: 'petr@example.com',
          accessCode: '67890',
          createdAt: new Date().toISOString()
        }
      ];
      setParticipants(mockParticipants);
      
      // 🟢 РАБОЧИЙ КОД - закомментируй когда тестируешь без бэкенда
      // const data = await getParticipants();
      // setParticipants(data);
      
    } catch (e: any) {
      const message = e?.message || 'Не удалось загрузить участников';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParticipants();
  }, []);

  return { participants, loading, error, refetch: fetchParticipants };
}