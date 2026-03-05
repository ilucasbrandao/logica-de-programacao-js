function razaoProgressaoGeometrica(a, b) {
  let getPG = 1; // Variável para armazenar o resultado da progressão geométrica

  if (a > b) {
    return "O valor de a deve ser menor ou igual ao valor de b.";
  }

  if (a <= 0 || b <= 0) {
    return "Os valores de a e b devem ser positivos.";
  }

  // Cálculo da progressão geométrica
  getPG = Math.pow(a, b - a + 1);

  return getPG;
}

console.log(razaoProgressaoGeometrica(2, 35));
