/*
banco de dados = lugar onde são armazenados dados quaisquer
sqlite3 
.verbose() - ajuda a ver os erros no desenvolvimento
.Database(nome) - cria database ou abre database já existente

à variável que contem o objeto criado por .Database()
.serialize(() => {}) - faz os comandos dentro da função rodarem de forma síncrona 
.prepare("comando blah blah (?)") - cria um comando padrão com espaços variáveis para ser usado
.each(comando) - serve para ler a database e roda a função a cada entitade encontrada

à variável que contem o objeto criado por .prepare()
.run(argumentos, () => {err, row(dados)}) - roda o codigo feito em prepare
.finalize() - reseta o prepare




*/

import readline from 'readline';
const scanf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    scanf.question(question, answer => resolve(answer));
  });
}

import sqlite3 from 'sqlite3';
sqlite3.verbose();
var dbName = 'cooldb'
var db = new sqlite3.Database(dbName);

db.serialize(async function() {
  //db.run("DROP TABLE IF EXISTS user")
  //db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
  
  let process = db.prepare("INSERT INTO user (name) VALUES (?);");
  for (var i = 0; i < 10; i++) {
    let userName;
    userName = await ask("what's up\n");
    process.run(userName);
  }
  process.finalize();
  
  db.each("SELECT * FROM user", function(err, row) {
      console.log("User id : "+row.id+"   User name :" + row.name);
  });
});