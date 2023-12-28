import { ReactNode } from "react"

export interface Transaction {
    id: number,
    price: number,
    category: string,
    createdAt: string
    description: string,
    type: 'income' | 'outcome',
}
export interface TransactionsProviderProps {
    children: ReactNode
}

export interface CreateTransactionInput {
    price: number,
    category: string,
    description: string,
    type: 'income' | 'outcome',
}
