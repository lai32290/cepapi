# CEP API
Cep API, como o próprio nome diz, é um API de CEP, feito em Node e sem necessidade de banco de dados, atualmente hospedado no Heroku.

## Como usar
Buscando informações através do CEP:

```
GET   https://cep-api.herokuapp.com/<numero do cep>
GET   https://cep-api.herokuapp.com/89476000
```

Buscando CEPs através do nome da cidade (case insensitive):

```
GET   https://cep-api.herokuapp.com/cidade/<nome da cidade>
GET   https://cep-api.herokuapp.com/cidade/são paulo
GET   https://cep-api.herokuapp.com/cidade/São Paulo
```
