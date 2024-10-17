import Image from "next/image";
import { useRouter } from "next/router"; 
import { useEffect, useState } from "react";

const ServicoDetalhes = () => {
    const router = useRouter();
    const { id } = router.query;
    const [servico, setServico] = useState(null);

    useEffect(() => {
        const fetchServico = async () => {
            try {
                const res = await fetch('/api/servicos'); // Alteração no caminho
                const data = await res.json();
                const servicoEncontrado = data.find((service: { id: number }) => service.id === parseInt(id as string));
                setServico(servicoEncontrado);
            } catch (error) {
                console.error('Erro ao buscar o serviço: ', error);
            }
        }
        if (id) {
            fetchServico();
        }
    }, [id]);

    if (!servico) {
        return <div>Serviço não encontrado!!</div>;
    }

    return (
        <>
            <h1>Serviço: {servico.nomeServico}</h1>
            <p>Preço: R$ {servico.preco.toFixed(2)}</p>
            {servico.imagem && <Image src={servico.imagem} alt={`Imagem de ${servico.nomeServico}`} width={200} height={200} />} 
        </>
    );
}

export default ServicoDetalhes;
