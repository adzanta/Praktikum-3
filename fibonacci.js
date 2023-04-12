function fibonacci(num) {
  if (num <= 1) return 1;

  let prev1 = 1;
  let prev2 = 1;
  let result = prev1 + prev2;

  for (let i = 3; i <= num; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
}

function printFibonacciSequence(num) {
  for (let i = 1; i <= num; i++) {
    console.log(fibonacci(i));
  }
}

printFibonacciSequence(10); // cetak deret Fibonacci 10 angka pertama