const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cep = require('./cep.json');
const cepCep = cep.reduce((curr, next) => {
    curr[next.cep] = next;
    return curr;
}, {});

app.get('/', (req, res) => {
    res.send(cep[0]);
});

app.get('/cidade/:cidade', (req, res) => {
    const cidade = req.params.cidade;
    const cepsFiltrado= cep.filter(c => c.cidade == cidade);
    res.send(cepsFiltrado);
});

app.get('/:cep', (req, res) => {
    const result = cepCep[req.params.cep];

    if(result) {
        res.send(cepCep[req.params.cep]);
        return;
    }

    res.send({ error: 1, message: "cep not found"});
});

app.listen(port, () => { console.log("I'm ready"); });
