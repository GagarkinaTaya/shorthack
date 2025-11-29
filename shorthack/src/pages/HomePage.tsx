import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css';

// Типы данных
interface Internship {
    id: number;
    title: string;
}

interface Rating {
    id: number;
    name: string;
    position: number;
}

interface Event {
    id: number;
    title: string;
}

export const HomePage: React.FC = () => {
    const [internships, setInternships] = useState<Internship[]>([]);
    const [rating, setRating] = useState<Rating[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    // Загрузка данных с бекенда
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_BASE_URL = 'http://team2.itatmisis.ru:8000';

                // Пример запросов 
                const [internshipsRes, ratingRes, eventsRes] = await Promise.all([
                    axios.get(`${API_BASE_URL}/internships`), // или другой эндпоинт
                    axios.get(`${API_BASE_URL}/rating`),      // или другой эндпоинт  
                    axios.get(`${API_BASE_URL}/events`)       // или другой эндпоинт
                ]);

                setInternships(internshipsRes.data);
                setRating(ratingRes.data);
                setEvents(eventsRes.data);
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
                // Если API не отвечает, используем mock данные
                setInternships([
                    { id: 1, title: 'Стажер JavaScript разработчик' },
                    { id: 2, title: 'Стажер Data Scientist в направление nlp/llm' },
                    { id: 3, title: 'Стажер python-разработчик' },
                    { id: 4, title: 'Младший менеджер по работе с молодежью' },
                    { id: 5, title: 'Стажер СУБД' },
                    { id: 6, title: 'Стажер дата-аналитик/data scientist' },
                    { id: 7, title: 'Стажер инженер по телефонии' },
                    { id: 8, title: 'Стажер инженер iot' },
                    { id: 9, title: 'Стажер (Data Engineer)' },
                    { id: 10, title: 'Стажер Frontend разработчик' },
                    { id: 11, title: 'Стажер Backend разработчик' },
                    { id: 12, title: 'Стажер FullStack разработчик' }
                ]);

                setRating([
                    { id: 1, name: 'Алексей', position: 1 },
                    { id: 2, name: 'Мария', position: 2 },
                    { id: 3, name: 'Дмитрий', position: 3 },
                    { id: 4, name: 'Анна', position: 4 },
                    { id: 5, name: 'Иван', position: 5 }
                ]);

                setEvents([
                    { id: 1, title: 'Techdoc Meetup #5' },
                    { id: 2, title: 'X5 QA Meetup #7' },
                    { id: 3, title: 'Data Picnic X5 Tec' },
                    { id: 4, title: 'ИИнсомния: I see ML' },
                    { id: 5, title: 'MoscowJS 60 + X5 Tech' },
                    { id: 6, title: 'X5 Tech Product Insight Meetup' }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {/* Стажировки */}
                <div className={styles.card}>
                    <h2>Стажировки</h2>
                    {internships.map(internship => (
                        <div key={internship.id} className={styles.ratingItem}>
                            {internship.title}
                        </div>
                    ))}
                </div>

                {/* Рейтинговая таблица */}
                <div className={styles.card}>
                    <h2>Рейтинговая таблица</h2>
                    {rating.map(person => (
                        <div key={person.id} className={styles.ratingItem}>
                            {person.position}. {person.name}
                        </div>
                    ))}
                </div>

                {/* Мероприятия */}
                <div className={styles.card}>
                    <h2>Мероприятия</h2>
                    {events.map(event => (
                        <div key={event.id} className={styles.ratingItem}>
                            {event.title}
                        </div>
                    ))}
                </div>

                {/* Активности */}
                <div className={styles.card}>
                    <h2>Активности</h2>
                    <div className={styles.ratingItem}>Селфи с Tech Crew - 10 баллов</div>
                    <div className={styles.ratingItem}>Зелёный объект челлендж - 15 баллов</div>
                    <div className={styles.ratingItem}>Охота на QR-коды - 15 баллов</div>
                    <div className={styles.ratingItem}>Фото с другом - 20 баллов</div>
                    <div className={styles.ratingItem}>Повтори позу персонажа - 10 баллов</div>
                </div>
            </div>
        </div>
    );
};