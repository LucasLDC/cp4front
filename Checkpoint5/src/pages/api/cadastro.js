import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'cadastro.json');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const newData = req.body;
        console.log('Dados recebidos:', newData); // Log dos dados recebidos

        // Verifica se o arquivo existe
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                // Se o arquivo não existe, cria um novo com um array vazio
                fs.writeFile(filePath, JSON.stringify([]), (err) => {
                    if (err) {
                        console.error('Erro ao criar o arquivo:', err);
                        return res.status(500).json({ message: 'Erro ao criar o arquivo.' });
                    }
                    console.log('Arquivo criado:', filePath);
                    saveData(newData, res); // Salva os dados após criar o arquivo
                });
            } else {
                // Se o arquivo existe, lê e salva os dados
                saveData(newData, res);
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function saveData(newData, res) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return res.status(500).json({ message: 'Erro ao ler o arquivo.' });
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (e) {
            console.error('Erro ao fazer o parse do JSON:', e);
            jsonData = []; // Se o JSON estiver malformado, cria um array vazio
        }

        jsonData.push(newData);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => { // Adicionei null, 2 para formatação
            if (err) {
                console.error('Erro ao salvar os dados:', err);
                return res.status(500).json({ message: 'Erro ao salvar os dados.' });
            }
            res.status(200).json({ message: 'Cadastro realizado com sucesso.' });
        });
    });
}
