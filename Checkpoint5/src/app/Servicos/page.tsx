'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

const Serviços = () => {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const res = await fetch('/api/servicos'); // Alteração no caminho
                const data = await res.json();
                setServicos(data);
            } catch (error) {
                console.log("Erro ao buscar os serviços: ", error);
            }
        }
        fetchServicos();
    }, []);

    return (
        <>
            <h1>Serviços que fazemos</h1>
            <ul>
                {
                    servicos.map(servico => (
                        <li key={servico.id}>
                            <Link href={`/servicos/${servico.id}`}>{servico.nomeServico}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default Serviços;
