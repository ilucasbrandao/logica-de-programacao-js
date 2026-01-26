// Exercício: Adicionar a propriedade "marca" ao objeto carro e Calcular a média de consumo de um carro em Km/L e exibir uma mensagem formatada

const carro = {
  modelo: "Uno",
  ano: 2023,
  km: 10000,
  combustivel: "Gasolina",
  litrosConsumidos: 625,
};

carro.marca = "Fiat";
console.log(
  `O carro ${carro.marca} ${carro.modelo} ${carro.ano} fez em média ${carro.km / carro.litrosConsumidos} Km/L de ${carro.combustivel}`,
);
