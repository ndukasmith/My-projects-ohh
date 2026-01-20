//Print 1 - 135
for (let i = 1; i <= 135; i++) {
  console.log(`Number is: ${i} Sum: ${(i * (i + 1)) / 2}`);
}
//This solution uses the formula for the sum of consecutive numbers to calculate the sum up to each number, rather than adding them up in a loop. It's more efficient and interesting.

//Print Odd Numbers 1 - 135
for (let i = 1; i <= 135; i++) {
  if (i % 2 !== 0) {
    console.log(`Odd number is: ${i} Sum: ${(i * (i + 1)) / 2}`);
  }
}
//This version checks if each number is odd before printing, making it more focused on odd numbers.

//Sum of Printed Numbers
let sum = 0;
for (let i = 1; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i} Sum: ${sum}`);
}
//This solution keeps track of the sum as it prints each number, incrementing it by the current number on each iteration.

//Print the elements of an array
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Number is: ${arr[i]}`);
  }
}

printArrayElements(X);
//A generic function that works with arrays of any size, passed as the argument X.

//Find Max
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const X = [2, -3, -1];
console.log(`Maximum value: ${findMax(X)}`);
//This function iterates through the array to find the maximum value, handling negative numbers and zeros correctly.

//Get Average
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const X = [2, 1, 3];
console.log(`Average: ${getAverage(X)}`);
//Calculates the sum of all elements in the array and divides it by the number of elements to find the average.

//Eliminate the Negatives
function eliminateNegatives(arr) {
  return arr.map(num => (num < 0 ? 0 : num));
}

const X = [2, -1, 4, -3];
console.log(`Array without negatives: ${eliminateNegatives(X)}`);
//This function uses the map method to create a new array where negative numbers are replaced with 0.

//Number to String
function convertToStrings(arr) {
  return arr.map(num => (num < 0 ? `'Turing` : num));
}

const X = [1, -4, 0, -1];
console.log(`Array with negative numbers converted to strings: ${convertToStrings(X)}`);