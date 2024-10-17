import servicosData from './servicos.json';

export default function handler(req, res) {
    res.status(200).json(servicosData);
}
