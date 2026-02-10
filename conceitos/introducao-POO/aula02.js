class Aluno {
  constructor(name, course) {
    this.name = name;
    this.course = course;
    this.notas = [];
  }

  informarNotas(n1, n2, n3, n4) {
    // Verificar se as notas estão dentro do intervalo permitido (0 a 10)
    if (
      (n1 < 0 || n1 > 10) &&
      (n2 < 0 || n2 > 10) &&
      (n3 < 0 || n3 > 10) &&
      (n4 < 0 || n4 > 10)
    ) {
      throw Error(
        `O valor das notas devem ser números positivos entre 0 e 10.`,
      );
    }

    this.notas = [n1, n2, n3, n4];
    return this.notas;
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      throw Error(
        `Nenhuma nota informada para o aluno ${this.name}. Por favor, informe as notas antes de calcular a média.`,
      );
    }
    let media =
      this.notas.reduce((acc, nota) => acc + nota, 0) / this.notas.length;
    const resultado = media >= 6 ? "Aprovado" : "Reprovado";
    return `Média de notas do aluno ${this.name}: ${media} - ${resultado}`;
  }
}

// Criando um objeto da classe Aluno
const aluno = new Aluno("Lucas", "Análise e Desenvolvimento de Sistemas");

// Exibindo as informações do aluno
console.log("Informações do Aluno: ");
console.log(aluno);
console.log("-".repeat(40));

// Informando as notas do aluno
console.log(aluno.informarNotas(5, 6, 7, 9));
console.log("-".repeat(40));

// Calculando e exibindo a média das notas do aluno
console.log(aluno.calcularMedia());
console.log("-".repeat(40));
