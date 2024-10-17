'use client';

import React, { useState } from 'react';
import styles from './AdicionarServico.module.css';

interface Servico {
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    duracao: string;
}

const AdicionarServicoPetshop: React.FC = () => {
    const [servico, setServico] = useState<Servico>({
        nome: '',
        descricao: '',
        preco: 0,
        categoria: '',
        duracao: ''
    });

    const [mensagem, setMensagem] = useState<string>('');
    const [erro, setErro] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setServico((prevServico) => ({
            ...prevServico,
            [name]: name === 'preco' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (servico.nome && servico.descricao && servico.preco > 0 && servico.categoria && servico.duracao) {
            console.log('Serviço adicionado:', servico);
            setMensagem('Serviço adicionado com sucesso!');
            setErro(false);
            setServico({ nome: '', descricao: '', preco: 0, categoria: '', duracao: '' }); // Resetando o formulário
        } else {
            setMensagem('Preencha todos os campos corretamente.');
            setErro(true);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Adicionar Serviço de Petshop</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="nome">Nome do Serviço</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome do Serviço"
                            value={servico.nome}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            name="descricao"
                            placeholder="Descrição do Serviço"
                            value={servico.descricao}
                            onChange={handleChange}
                            className={styles.textareaField}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="preco">Preço (R$)</label>
                        <input
                            type="number"
                            name="preco"
                            placeholder="Preço do Serviço"
                            value={servico.preco}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="categoria">Categoria</label>
                        <select
                            name="categoria"
                            value={servico.categoria}
                            onChange={handleChange}
                            className={styles.selectField}
                            required
                        >
                            <option value="">Selecione a categoria</option>
                            <option value="Banho">Banho</option>
                            <option value="Tosa">Tosa</option>
                            <option value="Consulta">Consulta Veterinária</option>
                            <option value="Vacinação">Vacinação</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="duracao">Duração Estimada</label>
                        <input
                            type="text"
                            name="duracao"
                            placeholder="Ex: 30 minutos, 1 hora"
                            value={servico.duracao}
                            onChange={handleChange}
                            className={styles.inputField}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Adicionar Serviço
                    </button>
                </form>

                {mensagem && (
                    <p className={erro ? styles.erro : styles.sucesso}>{mensagem}</p>
                )}
            </div>
        </div>
    );
};

export default AdicionarServicoPetshop;
