import { useLocation } from "react-router-dom";
import { MenuLink } from "../../StyledComponents/Home";
import { FundoHeader } from "../../StyledComponents/Header";
const Header = () => {
    const UrlNome = useLocation();
    return (
        <>
            <FundoHeader>
                <h1>Meu Cabeçalho</h1>
                
                {UrlNome.pathname !== "/Produtos" && (
                    <MenuLink to="/Produtos">Produtos</MenuLink>
                )}
                {UrlNome.pathname !== "/DetalhesProdutos" && (
                    <MenuLink to="/DetalhesProdutos">Detalhes Produtos</MenuLink>
                )}
            </FundoHeader>
        </>
    )
}
export default Header;