import { useLocation } from "react-router-dom";
import { MenuLink } from "../../StyledComponents/Home";
import { FundoHeader } from "../../StyledComponents/Header";
 
const Header = () => {
    const UrlNome = useLocation();// coleto minha url
    return (
        <>
            <FundoHeader>
                <h1>meu cabecario</h1>
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
 