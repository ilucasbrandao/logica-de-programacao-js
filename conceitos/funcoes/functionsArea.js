function calcularAreaRetangulo(a, l) {
  if (typeof a !== "number" || typeof l !== "number") {
    throw Error("Os parâmetros devem ser número.");
  }

  return a * l;
}

function calcularAreaTriangulo(b, a) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("Os parâmetros devem ser número.");
  }
  return (b * a) / 2;
}

function calcularAreaCirculo(raio) {
  if (typeof raio !== "number") {
    throw Error("O parâmetro deve ser número.");
  }
  return Math.PI * Math.pow(raio, 2);
}

try {
  console.log(calcularAreaRetangulo(5, 4)); // 20
  console.log(calcularAreaTriangulo(5, 10)); // 25
  console.log(calcularAreaCirculo(5)); // 78.53981633974483
} catch (error) {
  console.log(error);
}
