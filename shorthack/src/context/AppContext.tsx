import React, { createContext, useContext, useState, useEffect } from 'react';

type ToastType = 'success' | 'error';

interface Toast {
    type: ToastType;
    message: string;
}

interface AppContextValue {
    toast: Toast | null;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    clearToast: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toast, setToast] = useState<Toast | null>(null);

    const showSuccess = (message: string) => setToast({ type: 'success', message });
    const showError = (message: string) => setToast({ type: 'error', message });
    const clearToast = () => setToast(null);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                clearToast();
            }, 2000); // Теперь исчезнет через 2 секунды

            return () => clearTimeout(timer);
        }
    }, [toast]);

    return (
        <AppContext.Provider value={{ toast, showSuccess, showError, clearToast }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextValue => {
    const ctx = useContext(AppContext);
    if (!ctx) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return ctx;
};
