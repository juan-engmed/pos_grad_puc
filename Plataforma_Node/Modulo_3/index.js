const express = require('express');
const app = express();
const port = 3000;


//Criando 1º MIddleware responsável por logar, por exemplo
const logMiddleware = function(res, req, next){
    console.log("API recebeu alguma informação");
    next();
}

//Forma de instanciar o middleware
app.use(logMiddleware)

//Middleware para expor arquivos estáticos (html)
app.use('/testehtml',express.static("./site"))

app.get('/', (req,res) => res.send("Hello World!"));

app.get('/testehtml', (req,res) => res.send("Hello World!"));

app.post('/teste', (req, res) => {

    res.send({ status: 'ok' });
})

app.listen(port, () =>
console.log("App rodando!"));