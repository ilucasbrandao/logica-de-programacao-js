function getPG(razão, limite, n = 1) {
  return n * razão < limite ? getPG(razão, limite, n * razão) : n;
}

let count = 0;
function getPGEsp(razao, sequencia) {
  let result = 1;
  console.log(result);
  for (let i = 1; i <= sequencia; i++) {
    result *= razao;
    count++;
    console.log(result);
  }
  return result;
}

console.log(getPGEsp(2, 5));
console.log(count);
