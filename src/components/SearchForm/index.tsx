import * as z from 'zod'
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export const SearchForm = () => {

    const { fetchTransactions } = useContext(TransactionsContext)


    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    })

    const hancleSearchTransactions = async (data: SearchFormInput) => {
        await fetchTransactions(data.query)
    }

    return (
        <>
            <SearchFormContainer onSubmit={handleSubmit(hancleSearchTransactions)}>
                <input
                    type="text"
                    placeholder="Busquem por transações"
                    {...register('query')}
                />
                <button disabled={isSubmitting}>
                    <MagnifyingGlass size={20} />
                    Buscar
                </button>
            </SearchFormContainer>
        </>
    );
}

