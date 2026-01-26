// Criando um objeto pessoa com propriedades nome e sobrenome e atribuindo um objeto endereco a ele

const pessoa = {
  nome: "Lucas",
  sobrenome: "Brandão",
};

const endereco = {
  street: "Rua ABC",
  number: 1190,
};

pessoa.endereco = endereco;

console.log(
  `O endereço de ${pessoa.nome} é na ${pessoa.endereco.street}, nº ${pessoa.endereco.number}.`,
);
