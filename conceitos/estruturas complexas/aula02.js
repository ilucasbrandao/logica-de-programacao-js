// Definindo um array de objetos para representar produtos em um estoque
// Cada objeto contém propriedades como nome, preço, categoria e quantidade em estoque

const produtos = [
    { nome: 'Notebook', preco: 2500, categoria: 'Eletrônicos', estoque: 15 },
    { nome: 'Smartphone', preco: 1800, categoria: 'Eletrônicos', estoque: 30 },
    { nome: 'Camiseta', preco: 50, categoria: 'Roupas', estoque: 100 },
    { nome: 'Tênis', preco: 300, categoria: 'Calçados', estoque: 50 },
    { nome: 'Relógio', preco: 800, categoria: 'Acessórios', estoque: 20 }
]

console.log('Lista de Produtos:');
console.log('-'.repeat(30));


for (let i = 0; i < produtos.length; i++) {
    console.log(`Nome do produto: ${produtos[i].nome}\nPreco: R$${produtos[i].preco.toFixed(2)}\nCategoria: ${produtos[i].categoria}\nEstoque: ${produtos[i].estoque}`)
    console.log('-'.repeat(30));
}