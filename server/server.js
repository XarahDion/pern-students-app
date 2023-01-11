const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const studentRoutes = require('./routes');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get('/', (req, res) =>{
    res.send('hello world')
})

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));