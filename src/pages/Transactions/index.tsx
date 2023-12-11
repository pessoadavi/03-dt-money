import Summary from "../../components/Summary";
import { Header } from "../../components/Header";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { SearchForm } from "../../components/SearchForm";
import { useEffect, useState } from "react";

export const Transactions = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        loadTransactions()
    }, [])

    const loadTransactions = async () => {
        const response = await fetch('http://localhost:3333/transactions')
        setTransactions(await response.json())
    }

    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions?.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%" >{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    );
}
