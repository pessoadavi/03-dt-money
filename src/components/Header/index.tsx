import logoimg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionalModal from '../NewTransactionalModal';
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <img
                        src={logoimg}
                        alt=''
                    />
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>
                                Nova transação
                            </NewTransactionButton>
                        </Dialog.Trigger>
                        <NewTransactionalModal />
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}
