const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Harmony is Alive!'));

app.listen(port, () => console.log(`Harmony is listening to https://localhost:${port}`));