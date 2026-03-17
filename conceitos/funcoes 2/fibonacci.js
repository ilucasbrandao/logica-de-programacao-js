function fibonacci(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    if (n <= 1) {
      return n;
    }
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(18));

function fibonacciMemoization(n, cache) {
  cache = cache || {};

  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  return (cache[n] =
    fibonacciMemoization(n - 1, cache) + fibonacciMemoization(n - 2, cache));
}

console.log(fibonacciMemoization(18));
