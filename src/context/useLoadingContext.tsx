/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

interface LoadingContextType {
    loading: boolean;
    setLoading: (value: boolean) => void;
}
const LoadingContext = createContext<LoadingContextType>(
    {} as LoadingContextType
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export function useLoading(): LoadingContextType {
    const context = useContext(LoadingContext);
    return context;
} 



// Exemplo da estrutura do para criar o context 