const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cepSrc = require('./cep.json');
const ceps = cepSrc.reduce((curr, next) => {
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
    const cep = ceps[req.params.cep];

    if(cep) {
        res.send(cep);
        return;
    }

    res.send({ error: 1, message: "cep not found"});
});

app.listen(port, () => { console.log("I'm ready"); });
