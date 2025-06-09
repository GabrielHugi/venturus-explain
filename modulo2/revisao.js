//git
/*
git add <arquivo> - faz o git registrar um arquivo como sendo do projeto
git rm <arquivo> - faz o contrário
git commit - dá commit no código e assim esse estado do projeto fica registrado
git push - salva o código no repositório remoto (normalmente o github)
git pull - puxa o código salvo no repositório remoto 
git init - inicia o git no repositório
.gitignore - ignora alguns arquivos ou pastas 

nodemon - forma de rodar o node que faz o node resetar a cada mudança de código. Bom para desenvolvimento
modulo http ajuda a servers http de forma nativa a o node js mas é obsoleto
modulo fs (file system) permite manipular arquivos usando o node


insomnia - software q permite testar requests
*/

import http from 'http';
import fs from 'fs';

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(3000);