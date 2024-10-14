'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  petName: string;
  species: string;
  date: string;
  time: string;
};

const PageAgendamento = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/agendamentos", data);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Agendamento</h1>
      {success ? (
        <p>Agendamento realizado com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Informações do Agendamento</legend>
            
            <label>
              Nome:
              <input type="text" {...register("name", { required: true })} />
            </label>
            {errors.name && <p>O nome é obrigatório.</p>}

            <label>
              Email:
              <input type="email" {...register("email", { required: true })} />
            </label>
            {errors.email && <p>O email é obrigatório.</p>}

            <label>
              Nome do pet:
              <input type="text" {...register("petName", { required: true })} />
            </label>
            {errors.petName && <p>O nome do pet é obrigatório.</p>}

            <label>
              Espécie do pet:
              <select {...register("species", { required: true })}>
                <option value="">Selecione</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
              </select>
            </label>
            {errors.species && <p>A espécie do pet é obrigatória.</p>}

            <label>
              Data:
              <input type="date" {...register("date", { required: true })} />
            </label>
            {errors.date && <p>A data é obrigatória.</p>}

            <label>
              Hora:
              <input type="time" {...register("time", { required: true })} />
            </label>
            {errors.time && <p>A hora é obrigatória.</p>}
            
          </fieldset>
          
          <button type="submit">Agendar</button>
        </form>
      )}
    </div>
  );
};

export default PageAgendamento;
