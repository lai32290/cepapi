const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cep = require('./cep.json');
const ceps = cep.reduce((curr, next) => {
    curr[next.cep] = next;
    return curr;
}, {});

app.get('/', (req, res) => {
    res.send(cep[0]);
});

app.get('/:cep', (req, res) => {
    const result = ceps[req.params.cep];

    if(result) {
        res.send(ceps[req.params.cep]);
        return;
    }

    res.send({ error: 1, message: "cep not found"});
});

app.listen(port, () => { console.log("I'm ready"); });
