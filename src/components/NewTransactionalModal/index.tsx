import * as z from 'zod'
import { useContext } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { CloseButton, Content, Overlay, TransactionTypeButton, TransactionType } from "./styles";

const newTransactionFormSchema = z.object({
    price: z.number(),
    category: z.string(),
    description: z.string(),
    type: z.enum(['income', 'outcome']),
})

type TransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

const NewTransactionalModal = () => {

    const { createTransactions } = useContext(TransactionsContext)

    const { control, register, handleSubmit, reset, formState: { isSubmitted } } = useForm<TransactionsFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: { type: 'income' }
    })

    const handleCreateNewTransaction = async (data: TransactionsFormInputs) => {
        const { category, description, price, type } = data

        await createTransactions({category, description, price, type})
        reset()
    }

    return (
        <>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <Dialog.Title> Nova transação</Dialog.Title >
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input
                            required
                            type="text"
                            placeholder="Descrição"
                            {...register('description')}
                        />
                        <input
                            required
                            type="number"
                            placeholder="Preço"
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input
                            required
                            type="text"
                            placeholder="Categoria"
                            {...register('category')}
                        />
                        <Controller
                            name='type'
                            control={control}
                            render={(props) => {
                                return (
                                    <TransactionType
                                        value={props.field.value}
                                        onValueChange={props.field.onChange}
                                    >
                                        <TransactionTypeButton variant='income' value='income'>
                                            <ArrowCircleUp size={24} />
                                            Entrada
                                        </TransactionTypeButton>
                                        <TransactionTypeButton variant='outcome' value='outcome'>
                                            <ArrowCircleDown size={24} />
                                            Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                            }}
                        />
                        <button type="submit" disabled={isSubmitted}>
                            Cadastrar
                        </button>
                    </form>
                </Content>
            </Dialog.Portal>
        </>
    );
}

export default NewTransactionalModal;