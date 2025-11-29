import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.page}>
            <h1>404</h1>
            <p>Страница не найдена.</p>
            <Link to="/">На главную</Link>
        </div>
    );
};
