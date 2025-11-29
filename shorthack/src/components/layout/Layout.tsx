import React from 'react';
import { Outlet } from 'react-router-dom'; // Добавь этот импорт
import { useAppContext } from '../../context/AppContext';
import styles from './Layout.module.css';

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { toast, clearToast } = useAppContext();

    return (
        <div className={styles.app}>
            <main className={`${styles.main} container`}>
                {toast && (
                    <div
                        className={`${styles.toast} ${toast.type === 'success' ? styles.toastSuccess : styles.toastError
                            }`}
                        onClick={clearToast}
                    >
                        {toast.message}
                    </div>
                )}

                <Outlet />
                {children}
            </main>
        </div>
    );
};