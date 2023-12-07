import Summary from "../../components/Summary";
import { Header } from "../../components/Header";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export const Transactions = () => {
    return (
        <>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%" >Desenvolvimento do site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$12.500,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>07/12/2023</td>
                        </tr>
                        <tr>
                            <td width="50%" >Desenvolvimento do site</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$12.500,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>07/12/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </>
    );
}
