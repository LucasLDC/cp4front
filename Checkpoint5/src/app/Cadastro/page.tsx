"use client";
import React, { useState } from "react";
import CadastroContainer from "../css_Styled_Components/CadastroCss";
import styles from "./Cadastro.module.css";
import { useRouter } from "next/navigation"; // Correto no App Router

const PageCadastro = () => {
  const rota = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [especiePet, setEspeciePet] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Validação dos campos
    if (!nome || !email || !senha || !nomePet || !especiePet) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    // Validação do formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    // Dados do cadastro
    const cadastroData = {
      nome,
      email,
      senha,
      nomePet,
      especiePet,
    };

    try {
      // Envio para API que salva num arquivo JSON
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastroData),
      });

      if (response.ok) {
        // Armazena no web storage
        localStorage.setItem("cadastroData", JSON.stringify(cadastroData)); // Armazena todos os dados
        localStorage.setItem("email", email); // Armazena apenas o email
        localStorage.setItem("senha", senha); // Armazena apenas a senha
        sessionStorage.setItem("logado", "true");
        rota.push("/Login"); // Redireciona para a página de login
      } else {
        setError("Erro ao realizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setError("Erro ao realizar o cadastro.");
    }
  };

  return (
    <CadastroContainer>
      <fieldset className={styles.fieldset}>
        <legend><h1>Cadastre-se</h1></legend>

        <label htmlFor="nome">Nome
          <br />
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />

        <label htmlFor="email">Email
          <br />
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label htmlFor="senha">Senha
          <br />
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </label>
        <br />

        <label htmlFor="nomePet">Nome do pet
          <br />
          <input type="text" id="nomePet" value={nomePet} onChange={(e) => setNomePet(e.target.value)} />
        </label>
        <br />

        <label htmlFor="especiePet">Espécie do seu pet
          <br />
          <input type="radio" name="especiePet" value="Cachorro" onChange={(e) => setEspeciePet(e.target.value)} /> Cachorro
          <input type="radio" name="especiePet" value="Gato" onChange={(e) => setEspeciePet(e.target.value)} /> Gato
        </label>
        <br />

        <button type="submit" onClick={handleCadastro}>Enviar</button>
      </fieldset>
      {error && <p>{error}</p>}
    </CadastroContainer>
  );
};

export default PageCadastro;
