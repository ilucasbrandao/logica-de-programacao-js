// Estruturas Complexas - Aula 01: Trabalhando com arrays de objetos em JavaScript
// Lógica de Programação - desafio está solicitando que você crie um array de objetos representando pessoas,
// cada objeto deve conter propriedades como nome e email. Exiba cada objeto usando um loop.

const pessoas = [
    { nome: 'Lucas', email: 'lucasdev@email.com'},
    { nome: 'Julianne', email:'julianneteacher@email.com'},
    { nome: 'Sophia', email: 'sophiastudent@email.com'},
    { nome: 'Maria', email: 'maria@example.com'},
    { nome: 'Carlos', email: 'carlos@example.com'}
];

for(let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome}: ${pessoas[i].email}`);
}

console.log('Programa Finalizado.')