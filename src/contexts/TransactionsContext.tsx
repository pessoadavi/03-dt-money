import { useState, useEffect } from 'react';
import { ReactNode, createContext } from "react";
interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[]
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        loadTransactions()
    }, [])

    const loadTransactions = async () => {
        const response = await fetch('http://localhost:3333/transactions')
        setTransactions(await response.json())
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}