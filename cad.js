const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = "URL_DE_CONEXÃO"; // Substitua pela URL de conexão fornecida pelo MongoDB Atlas
const dbName = 'nome_do_seu_banco';
const collectionName = 'nome_da_sua_colecao';

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Verificar se o usuário já existe
        const existingUser = await collection.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Nome de usuário já está em uso.' });
        }

        const newUser = {
            username,
            password,
            email
        };

        await collection.insertOne(newUser);
        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
    } catch (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    } finally {
        client.close();
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
