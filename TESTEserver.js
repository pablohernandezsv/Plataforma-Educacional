const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const ATLAS_URI = 'Smongodb+srv://pablovieira04:6Ki9sv1gNyjpVVyz@cluster0.vgygmui.mongodb.net/'; // Substitua pela URL de conexão do MongoDB Atlas
const dbName = 'users';
const collectionName = 'users';

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o MongoDB Atlas estabelecida');
}).catch((err) => {
    console.error('Erro na conexão com o MongoDB Atlas:', err);
});

// Defina um esquema para os dados de usuário
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Rota para criar um novo usuário
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
});

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});