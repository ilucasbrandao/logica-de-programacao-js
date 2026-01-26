const pessoa = {
  nome: "Lucas",
  sobrenome: "Brandão",
};

const endereco = {
  street: "Rua ABC",
  number: 1190,
};

pessoa.endereco = endereco;

// Loop for in que itera sobre as propriedades de um objeto
for (let prop in pessoa) {
  console.log(pessoa[prop]);
}
