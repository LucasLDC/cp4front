import { useEffect } from "react";
import { Divfundo, ErrorH2, Errorh1 } from "../../StyledComponents/Error404";

const Error404 = () => {
  useEffect(() => {
    document.title = "Erro 404 - Página Não Encontrada";
  }, []);

  return (
    <>
      <Divfundo>
        <Errorh1>Erro 404</Errorh1>
        <ErrorH2>Ops! Infelizmente a página que você tentou acessar não existe.</ErrorH2>
      </Divfundo>
    </>

  )
}

export default Error404;
