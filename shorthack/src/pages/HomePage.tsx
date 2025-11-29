import React from 'react';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.container}>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Стажировки</h2>
                    <p>Backend developer</p>
                    <p>Frontend developer</p>
                </div>

                <div className={styles.card}>
                    <h2>Рейтинговая таблица</h2>
                </div>

                <div className={styles.card}>
                    <h2>Мероприятия</h2>
                </div>

                <div className={styles.card}>
                    <h2>МЕРЧ</h2>
                </div>
            </div>
        </div>
    );
};