const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});

const router = express.Router();

router.use((req, res, next) => {
    console.log('Middleware del router activado');
    next();
});

const messages = [];

router.post('/send', (req, res) => {
    const { user, content } = req.body;
    if (!user || !content) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    const message = { user, content, timestamp: new Date() };
    messages.push(message);
    res.status(201).json({ message: 'Mensaje enviado', data: message });
});

router.get('/receive', (req, res) => {
    res.json(messages);
});

app.use('/messages', router);

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Error del servidor.');
    });
    

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
