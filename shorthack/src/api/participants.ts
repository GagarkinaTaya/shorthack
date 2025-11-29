import { apiRequest } from './client';

export interface Participant {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  accessCode: string;
  createdAt: string;
}

export interface CreateParticipantPayload {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  accessCode: string;
}

// Регистрация участника
export function createParticipant(
  payload: CreateParticipantPayload
): Promise<Participant> {
  return apiRequest<Participant>('/participants', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

// Получить всех участников
export function getParticipants(): Promise<Participant[]> {
  return apiRequest<Participant[]>('/participants');
}