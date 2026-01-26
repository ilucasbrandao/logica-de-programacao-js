// Objetos - Aula 06
// Criando um objeto para armazenar informações de uma pessoa

import { prompt } from "../../prompt.js";

let input = prompt();

const pessoa = {
  nome: input("Digite seu nome: "),
  email: input("Digite seu email: "),
};

console.log(`Nome: ${pessoa.nome} e email: ${pessoa.email}`);
