/*
O Cenário: Sistema de Atendimento de um Posto de Saúde 🏥
Imagine que você está desenvolvendo o sistema que organiza a ordem de atendimento de pacientes.
Regras do Desafio:
Classe FilaAtendimento: Deve gerenciar os nomes dos pacientes.
Método chegada(nome): Adiciona um paciente ao final da fila.
Método chamarProximo():
Remove o paciente que está há mais tempo na espera (o primeiro da fila).
Retorna uma mensagem: "Atendendo: [Nome]".
Se a fila estiver vazia, avisa que não há pacientes.
Método verProximo(): Apenas mostra quem é o próximo a ser chamado, sem removê-lo da fila.
Método estadoFila(): Mostra quantos pacientes ainda faltam ser atendidos.

*/

class FilaAtendimento {
  #pacienteSendoAtendido;
  constructor() {
    this.queue = [];
    this.#pacienteSendoAtendido = null;
  }

  chegada(name, prioridade) {
    if (!name || typeof name != "string") {
      throw Error("Por favor, digite um nome válido.");
    }

    if (prioridade) {
      this.queue.unshift(name);
      console.log(`${name} entrou na fila como prioridade.`);
      return;
    }

    this.queue.push(name);
    console.log(`${name} entrou na fila.`);
  }

  chamarProximo() {
    if (this.isEmpty()) return "Não há nenhum paciente na fila.";

    this.#pacienteSendoAtendido = this.queue.shift();
    return `Atendendo: ${this.#pacienteSendoAtendido}`;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  verProximo() {
    if (this.isEmpty()) return "Não há nenhum paciente na fila.";
    return `Próximo paciente: ${this.queue[0]}`;
  }

  estadoDaFila() {
    return `Fila de atendimento: ${this.queue.length} pessoa(s).`;
  }
}

const atender = new FilaAtendimento();

//Adicionando nomes
atender.chegada("Lucas");
atender.chegada("Juh");
atender.chegada("Sophia");
atender.chegada("Veronica", true);
// mostrando a lista de atendimento
console.log(atender);
console.log(atender.chamarProximo());
console.log(atender);
console.log(atender.verProximo());
console.log(atender.estadoDaFila());
console.log(atender.chamarProximo());
console.log(atender.chamarProximo());
console.log(atender);
console.log(atender.chamarProximo());
console.log(atender);
