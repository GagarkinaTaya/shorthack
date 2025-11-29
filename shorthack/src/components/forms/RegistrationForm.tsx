import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateParticipant } from '../../hooks/UseCreateParticipants';
import styles from './RegistrationForm.module.css';

interface FormState {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    accessCode: string;
}

export const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const { submit, loading, error, success } = useCreateParticipant(); // ← исправил на success
    const [form, setForm] = useState<FormState>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        accessCode: ''
    });
    const [validationError, setValidationError] = useState<string | null>(null);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/home');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (!form.firstname.trim() || !form.lastname.trim() || !form.email.trim() || !form.password.trim() || !form.accessCode.trim()) {
            setValidationError('Все поля обязательны для заполнения');
            return;
        }

        setValidationError(null);

        try {
            await submit({
                firstname: form.firstname.trim(), // ← исправил на отдельные поля
                lastname: form.lastname.trim(),
                email: form.email.trim(),
                password: form.password.trim(),
                accessCode: form.accessCode.trim()
            });

            setForm({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                accessCode: ''
            });

            // Автоматический переход при успехе
            if (success) {
                navigate('/home');
            }

        } catch {
            // ошибки уже показаны через контекст
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h2>Регистрация</h2>

                <div className={styles.formField}>
                    <label htmlFor="firstname" className={styles.label}>
                        Имя
                    </label>
                    <input
                        id="firstname"
                        name="firstname"
                        value={form.firstname}
                        onChange={handleChange}
                        placeholder="Иван"
                        disabled={loading}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formField}>
                    <label htmlFor="lastname" className={styles.label}>
                        Фамилия
                    </label>
                    <input
                        id="lastname"
                        name="lastname"
                        value={form.lastname}
                        onChange={handleChange}
                        placeholder="Иванов"
                        disabled={loading}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formField}>
                    <label htmlFor="email" className={styles.label}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={loading}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formField}>
                    <label htmlFor="password" className={styles.label}>
                        Пароль
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                        disabled={loading}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formField}>
                    <label htmlFor="accessCode" className={styles.label}>
                        Код доступа
                    </label>
                    <input
                        id="accessCode"
                        name="accessCode"
                        type="text"
                        value={form.accessCode}
                        onChange={handleChange}
                        placeholder="Введите код доступа"
                        disabled={loading}
                        className={styles.input}
                    />
                </div>

                {validationError && (
                    <p className={styles.errorText}>{validationError}</p>
                )}

                {error && <p className={styles.errorText}>{error}</p>}

                {success && ( // ← исправил на success
                    <p className={styles.successText}>
                        Переход на главную...
                    </p>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? 'Отправка...' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>
    );
};