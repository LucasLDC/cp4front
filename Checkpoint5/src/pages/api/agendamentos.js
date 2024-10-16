import { NextApiRequest, NextApiResponse } from 'next';

const agendamentos = [];

export default async function handler(req, res) {
if (req.method === 'GET') {
        return res.status(200).json(agendamentos);
    }

    if (req.method === 'POST') {
        const { nome, email, petName } = req.body;
        agendamentos.push({ nome, email, petName });
        return res.status(201).json({ message: 'Agendamento criado com sucesso!' });
    }

    return res.status(405).json({ message: 'Método não permitido' });
}
