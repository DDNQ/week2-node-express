const express = require('express');

const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('My Week 2 API');
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    res.json({ message: `Hello, ${name}!` });
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User ${id} profile` });
})

app.use
    ((error, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Something went wrong' });
    });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


