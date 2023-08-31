import express from 'express';
import morgan from 'morgan';

const app = express();

const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get('/users', (req, res) => {
    res.json({ info: {
        "id" : "6197f7d7c1b2af0dccecdca2",
        name : "Juan",
        lastname : "Perez",
    } })
})

app.post('/users', (req, res) => {
    const { body } = req;
    res.status(201).json({ message : "Usuario creado", userInfo : body })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})