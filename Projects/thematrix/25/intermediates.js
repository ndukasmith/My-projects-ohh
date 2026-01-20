//Addition
let sum = 0;
for (let i = 200; i <= 2700; i++) {
  if (i % 3 === 0 && i % 5 === 0) continue;
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}
console.log(sum);
//Shift the Values
function shiftLeft(arr) {
  return arr.slice(1).concat(arr[0]);
}

const X = [2, 1, 6, 4, -7];
console.log(shiftLeft(X));
//FizzBuzz
let result = [];
for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
  else if (i % 3 === 0) result.push('Fizz');
  else if (i % 5 === 0) result.push('Buzz');
  else result.push(i);
}
console.log(result);
//Fibonacci
let a = 0, b = 1, sum = 0;
while (a < 1000000) {
  sum += a;
  [a, b] = [b, a + b];
}
console.log(sum);
Remove the Negative
function removeNegative(arr) {
  return arr.filter(num => num >= 0);
}

const X = [1, -2, 4, 1];
console.log(removeNegative(X));
//Communist Censorship
function censorWord(arr, word) {
  return arr.map(str => (str === word ? word.replace(/./g, '*') : str));
}

const X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
console.log(censorWord(X, 'Program'));
```<|eom|>
