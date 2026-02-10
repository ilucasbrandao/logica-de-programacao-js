class ContaBancaria {
  #saldo;
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  get saldo() {
    return `O saldo atual é R$: ${this.#saldo.toFixed(2)}`;
  }

  set saldo(novoSaldo) {
    return `O saldo só é atualizado através de métodos específicos, tente novamente.`;
  }

  depositar(valor) {
    if (typeof valor !== "number" || valor <= 0) {
      throw Error(`Numero inválido, tente novamente`);
    }

    this.#saldo += valor;
    return `Valor R$${valor.toFixed(2)} adicionado com sucesso, seu saldo atual é R$${this.#saldo.toFixed(2)}.`;
  }

  sacar(valor) {
    if (typeof valor !== "number" || this.#saldo <= 0 || valor > this.#saldo) {
      throw Error(`Saldo insuficiente para saque. Tente um valor menor.`);
    }

    this.#saldo -= valor;
    return `Saque R$${valor.toFixed(2)} efetuado com sucesso, seu saldo atual é R$${this.#saldo.toFixed(2)}.`;
  }
}

const conta = new ContaBancaria(100);

console.log("-".repeat(50));
console.log(conta);

console.log("-".repeat(50));
console.log(conta.saldo);

console.log("-".repeat(50));
console.log(conta.depositar(50));

console.log("-".repeat(50));
console.log(conta.sacar(120));

console.log("-".repeat(50));
console.log(conta.sacar(30));

console.log("-".repeat(50));
console.log(conta.saldo);
console.log("\n\nFim da aula 05");
