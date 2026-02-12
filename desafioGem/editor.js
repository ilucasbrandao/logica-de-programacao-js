/*
O Desafio: Editor de Texto Minimalista
Imagine que você está criando um editor de notas. Cada vez que o usuário digita uma frase nova, isso é um "estado".
Você deve permitir que ele escreva, mas também que ele se arrependa (Undo) ou mude de ideia sobre o arrependimento (Redo).

Requisitos do Desafio:
Classe Editor: Ela deve ter uma propriedade textoAtual (uma string) e o seu sistema de histórico acoplado.
Método escrever(novoTexto): Ele não apenas substitui o texto, mas salva o estado anterior no histórico para que possamos voltar.
Dica: Se eu escrever "A", depois "B", meu histórico deve saber como voltar para "A".
Método desfazer(): O textoAtual deve voltar para o que era antes.
Método refazer(): Se o usuário desfez algo, ele pode recuperar aquela escrita.
Limite de Memória: O editor só consegue lembrar dos últimos 10 movimentos (para não gastar muita memória).
*/

class Editor {
  #ponteiro;
  constructor(qtd) {
    this.historico = [];
    this.limite = qtd || 10;
    this.#ponteiro = -1;
    this.textoAtual = "";
  }

  escrever(novoTexto) {
    // limpa o futuro
    if (this.#ponteiro < this.historico.length - 1) {
      this.historico.splice(this.#ponteiro + 1);
    }

    // mantem o limite
    if (this.limite && this.historico.length >= this.limite) {
      this.historico.shift();
    }

    // adiciona o texto e atualiza o ponteiro
    this.historico.push(novoTexto);
    this.#ponteiro = this.historico.length - 1;
    this.textoAtual = novoTexto;
  }

  desfazer() {
    if (this.#ponteiro > 0) {
      this.#ponteiro--;
      this.textoAtual = this.historico[this.#ponteiro];
      return this.textoAtual;
    }
    return "Início do histórico. Nada para desfazer.";
  }

  refazer() {
    if (this.isEmpty()) return "Histórico vazio.";
    if (this.#ponteiro < this.historico.length - 1) {
      this.#ponteiro++;
      this.textoAtual = this.historico[this.#ponteiro];
      return this.textoAtual;
    }
    return "Final do histórico";
  }

  isEmpty() {
    return this.historico.length === 0;
  }
}

// --- TESTE ---
const meuEditor = new Editor(5);
meuEditor.escrever("Olá");
meuEditor.escrever("Olá, mundo!");
meuEditor.escrever("Olá, mundo! Tudo bem?");

console.log("Texto Atual:", meuEditor.textoAtual); // Tudo bem?
console.log("Desfazer:", meuEditor.desfazer()); // Olá, mundo!
console.log("Desfazer:", meuEditor.desfazer()); // Olá
console.log("Refazer:", meuEditor.refazer()); // Olá, mundo!
