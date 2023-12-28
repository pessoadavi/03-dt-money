import { api } from '../lib/axios';
import { createContext } from "react";
import { useState, useEffect } from 'react';
import { CreateTransactionInput, Transaction, TransactionsProviderProps } from './Interfaces';

export interface TransactionContextType {
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>
    createTransactions: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        fetchTransactions()
    }, [])

    const fetchTransactions = async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                q: query,
                _order: 'desc',
                _sort: 'createdAt',
            }
        })
        setTransactions(response.data)
    }

    const createTransactions = async (data: CreateTransactionInput) => {
        const { category, description, price, type } = data

        const response = await api.post('/transactions', {
            category, description, price, type, createdAt: new Date()
        })

        setTransactions(state => [response.data, ...state])
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, fetchTransactions, createTransactions }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}