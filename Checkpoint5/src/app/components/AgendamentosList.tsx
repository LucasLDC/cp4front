import React from 'react';
import useAgendamentos from '../data/agendamentos';

interface Agendamento {
  id: number;
  nome: string;
  email: string;
  petName: string;
}

const AgendamentosList = () => {
  const agendamentos: Agendamento[] = useAgendamentos();

  return (
    <div>
      <h2>Agendamentos</h2>
      <ul>
        {agendamentos.map((agendamento: Agendamento) => (
          <li key={agendamento.id}>
            <p>
              {agendamento.nome} - {agendamento.email} - {agendamento.petName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgendamentosList;