import logoimg from '../../assets/logo.svg'
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
                    <NewTransactionButton>
                        Nova transação
                    </NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}
