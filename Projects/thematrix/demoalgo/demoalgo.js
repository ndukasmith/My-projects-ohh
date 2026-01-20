Shift Number

Pseudocode:
Start with an empty list named Y.
Go through each item in list X, starting from the second item.
For each item, add the item just before it to list Y.
When you're done, give back the new list Y

Code versie
function shiftEachNumber(X) {
  let Y = [];
  for (let i = 1; i < X.length; i++) {
    Y.push(X[i - 1]);
  }
  return Y;
}

Remove Negative Numbers
Pseudocode:
Check if List is Empt
Remove Negative Number at Start
Keep Positive Number at Start

Code versie
function removeNegativeNumbers(X) {
  if (X.length === 0) return X;
  const firstElement = X[0];
  if (firstElement < 0) return removeNegativeNumbers(X.slice(1));
  return [firstElement, ...removeNegativeNumbers(X.slice(1))];

Sort 
Pseudocode:

Start with Your List
Find the Smallest Number
Move Smallest to the Front 
Shorten the List: 
repeat tiul finished 

Code versie
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

Largest Number from Each Sub-array
Pseudocode:
Create a New List
Look Inside Each Small List
Find the Biggest Number
Add to the New List

Code versie
function largestNumberFromSubarrays(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 4) {
    let largest = Math.max.apply(Math, arr.slice(i, i + 4));
    result.push(largest);
  }
  return result;


Titlecase
Pseudocode:
split the sentence into a list of words.
For each word in the list:
capitalize the first letter.
make the rest of the word lowercase.
combine all the transformed words back into a sentence.
return the sentence with the first letter of each word capitalized.

Code versie
// This function converts the first letter of each word in a string to uppercase and the rest to lowercase.
function titleCase(str) {
    const words = str.split(' '); // Split the string into words.
    const titleCasedWords = words.map((word) => { // Map over each word.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter and lowercase the rest.
    });
    const titleCasedStr = titleCasedWords.join(' '); // Join the words back into a string.
    return titleCasedStr; // Return the title-cased string.
  }
  