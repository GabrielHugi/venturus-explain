// web e apis
/*
npm é o node project manager ele serve para instalar pacotes externos 
npm i <dependencia> - instala uma dependencia ou se nenhuma dependencia for específicada atualiza as dependencias já instaladas do projeto
npm uninstall <dependencia> - desinstalla uma dependencia
npm init - inicia uma estrutura básica de um projeto npm

no package.json é possível especificar scripts que podem ser chamados com o comando npm como "npm start" 

apis rest:
- solicitações http
- comunicação stateless (sem guardar as interações anteriores, cada request é uma nova coisa independente)
- dados armazenáveis em cache
- interface consistente
- sistema de camadas hierarquico para processar as requisições
*/
import express from 'express';
// apis são aplicações web backend que devolvem informações ou executam ações baseado em requests http
const app = express();
const port = 3000;

//define uma rota que ativa uma função
app.get('/users', (req, res) => {
    //
    try {
        // faz alguma coisa
        // manda informação
        res.status(200).json({"answer": "cool", "users": "data"});
    }
    catch (err) {
        // pega o erro de execução de codigo e trata ele
        res.status(500).json({"error": "bro this shit not work man what the hell"})
    }
})

// faz o codigo escutar na porta port (3000)
app.listen(port, () => {
    //faz alguma coisa quando o código começa a rodar
    console.log("yo bro its running hahhahahahahh");
});