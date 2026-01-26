// Exemplo de uso do loop for em JavaScript
// Gera a tabuada de um número fornecido pelo usuário
// Solicita ao usuário que insira um número e exibe sua tabuada de 0 a 10

import { prompt } from "../../prompt.js"; 

const input = prompt();

/*
    O loop for é utilizado para repetir um bloco de código na quantidade de vezes
    especificada.
*/

let number = Number(input("Digite um número: "));

if (isNaN(number) || number <= 0){
        console.log("Valor inválido, digite novamente.")

} else {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
        
    }
}

console.log('Saiu do programa.')