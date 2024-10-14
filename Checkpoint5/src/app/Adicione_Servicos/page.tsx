'use client';

import React, { useState } from 'react';
import styles from './AdicionarServico.module.css';

interface Servico {
    nome: string;
    descricao: string;
    preco: number;
}

const AdicionarServico: React.FC = () => {
    const [servico, setServico] = useState<Servico>({
        nome: '',
        descricao: '',
        preco: 0
    });

    const [mensagem, setMensagem] = useState<string>('');
    const [erro, setErro] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setServico((prevServico) => ({
            ...prevServico,
            [name]: name === 'preco' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (servico.nome && servico.descricao && servico.preco > 0) {
            console.log('Serviço adicionado:', servico);
            setMensagem('Serviço adicionado com sucesso!');
            setErro(false);
            setServico({ nome: '', descricao: '', preco: 0 }); // Resetando o formulário
        } else {
            setMensagem('Preencha todos os campos corretamente.');
            setErro(true);
        }
    };

    return (
<>
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Adicionar Serviço</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do Serviço"
                        value={servico.nome}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />
                    <textarea
                        name="descricao"
                        placeholder="Descrição do Serviço"
                        value={servico.descricao}
                        onChange={handleChange}
                        className={styles.textareaField}
                        required
                    />
                    <input
                        type="number"
                        name="preco"
                        placeholder="Preço do Serviço"
                        value={servico.preco}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Adicionar Serviço
                    </button>
                </form>

                {mensagem && (
                    <p className={erro ? styles.erro : styles.sucesso}>{mensagem}</p>
                )}
            </div>
        </div>
</>
    );
};

export default AdicionarServico;