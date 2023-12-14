import { useContext } from 'react';
import Summary from "../../components/Summary";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { dateFormatter, priceFormatter } from '../../utils/formatter';

export const Transactions = () => {

    const { transactions } = useContext(TransactionsContext)

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
                                            {transaction.type === 'outcome' && '- '}
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    );
}
