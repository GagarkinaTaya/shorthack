import { useState } from 'react';
import { createParticipant } from '../api/participants';
import type { CreateParticipantPayload, Participant } from '../types/participant';
import { useAppContext } from '../context/AppContext';

interface UseCreateParticipantResult {
  submit: (payload: CreateParticipantPayload) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export function useCreateParticipant(): UseCreateParticipantResult {
  const { showSuccess, showError } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (payload: CreateParticipantPayload): Promise<void> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // 🔴 ВРЕМЕННАЯ ЗАГЛУШКА - раскомментируй для тестирования без бэкенда
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('✅ Регистрация:', payload);
      setSuccess(true);
      showSuccess('Участник успешно зарегистрирован');
      
      // 🟢 РАБОЧИЙ КОД - закомментируй когда тестируешь без бэкенда
      // const participant = await createParticipant(payload);
      // setSuccess(true);
      // showSuccess('Участник успешно зарегистрирован');
      
    } catch (e: any) {
      const message = e?.message || 'Не удалось отправить форму';
      setError(message);
      showError(message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
}