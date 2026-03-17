function fatorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(fatorial(5));

function fatorial2(n) {
  if (n < 2) return 1;

  return n * fatorial2(n - 1);
}
console.log(fatorial2(5));
