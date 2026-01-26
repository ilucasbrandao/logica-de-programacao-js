// Criando um objeto em JavaScript e exibindo suas propriedades em uma mensagem formatada.

let camisaDeTime = {
  time: "Corinthians",
  cor: "Preto e Branco",
  tamanho: ["P", "M", "G", "GG", "XG"],
  preco: 199.9,
  estoque: 10,
};
console.log(
  `A camisa de futebol do ${camisaDeTime.time}, tem por cores predominantes: ${camisaDeTime.cor}, com diversos tamanhos, desde ${camisaDeTime.tamanho}. O valor de mercado é R$${camisaDeTime.preco.toFixed(2)}, temos a pronta entrega, nosso estoque tem ${camisaDeTime.estoque} itens lhe esperando.`,
);
