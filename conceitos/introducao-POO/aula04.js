class Contador {
  #value;
  constructor() {
    this.name = "Contador";
    this.#value = 0;
  }

  Increase(num) {
    if (num < 0 || typeof num !== "number") {
      throw Error("Número inválido, tente novamente.");
    }

    this.#value += num;
    return `Incrementação de ${num} unidades realizada com sucesso!`;
  }

  UpdatedValue() {
    return `O valor atual do ${this.name}: ${this.#value} unidades.`;
  }
}

const contador = new Contador();

console.log("-".repeat(50));
console.log(contador);

console.log("-".repeat(50));
console.log(contador.Increase(40));

console.log("-".repeat(50));
console.log(contador.UpdatedValue());

console.log("-".repeat(50));
console.log(contador.Increase(20));

console.log("-".repeat(50));
console.log(contador);
