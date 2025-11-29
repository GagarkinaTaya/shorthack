import React from 'react';
import { RegistrationForm } from '../components/forms/RegistrationForm';
import styles from './RegistrationPage.module.css';

export const HomePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <RegistrationForm />
        </div>
    );
};
