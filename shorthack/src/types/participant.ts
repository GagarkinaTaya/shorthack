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