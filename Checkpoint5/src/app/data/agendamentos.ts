import axios from 'axios';
import { useState, useEffect } from 'react';

const useAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await axios.get('/api/agendamentos');
        setAgendamentos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAgendamentos();
  }, []);

  return agendamentos;
};

export default useAgendamentos;