import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm = () => {
    return (  
        <>
        <SearchFormContainer>
            <input
             type="text" 
             placeholder="Busquem por transações"
             />
             <button>
                <MagnifyingGlass size={20}/>
                Buscar
             </button>
        </SearchFormContainer>
        </>
    );
}
 
