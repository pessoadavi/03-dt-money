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
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        fetchTransactions()
    }, [])

    const fetchTransactions = async (query?: string) => {
        const url = new URL('http://localhost:3333/transactions')
        if(query) url.searchParams.append('q', query)
        const response = await fetch(url)
        setTransactions(await response.json())
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, fetchTransactions }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}