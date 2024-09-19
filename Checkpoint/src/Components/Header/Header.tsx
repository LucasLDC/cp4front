import { useLocation } from "react-router-dom";
import { MenuLink } from "../../StyledComponents/Home";

const Header = () => {
    const UrlNome = useLocation();// coleto minha url
    return (
        <>

            <h1>meu cabecario</h1>
            {UrlNome.pathname !== "/Produtos" && (
                <MenuLink to="/Produtos">Produtos</MenuLink>
            )}

            {UrlNome.pathname !== "/DetalhesProdutos" && (
                <MenuLink to="/DetalhesProdutos">Produtos</MenuLink>
            )}
        </>


    )
}

export default Header;