// Aula 09 - Verificando elementos inválidos em um array
// Dado o array abaixo, verifique se há algum elemento inválido (null, undefined ou NaN) no array.
// Se encontrar algum elemento inválido, exiba uma mensagem no console indicando que o array contém elementos inválidos.

const arrAleatorio = ["10", 20, true, "JavaScript", 45, false, "HTML", 30];
let encontrou = false;

for (let i = 0; i < arrAleatorio.length; i++) {
  const tipandoArr = arrAleatorio[i];
  if (tipandoArr === null || tipandoArr === undefined || isNaN(tipandoArr)) {
    console.log("Elemento inválido encontrado:", tipandoArr);
    encontrou = true;
    break;
  }
}
