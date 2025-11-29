// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://team2.itatmisis.ru:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Примеры запросов
export const apiService = {
  // Получить все эндпоинты (из docs)
  getEndpoints: () => api.get('/'),
  
  // Получить пользователей
  getUsers: () => api.get('/users'),
  
  // Получить мероприятия
  getEvents: () => api.get('/events'),
  
  // Получить рейтинг
  getRating: () => api.get('/rating'),
  
  // Получить стажировки
  getInternships: () => api.get('/internships'),
};

// В api.ts можно добавить interceptors для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);