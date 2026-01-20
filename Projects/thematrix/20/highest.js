function thirdHighest() {
    const input = prompt("Enter a list of numbers separated by commas:");
    const numbers = input.split(",").map(Number);

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > first) {
            third = second;
            second = first;
            first = numbers[i];
        } else if (numbers[i] > second) {
            third = second;
            second = numbers[i];
        } else if (numbers[i] > third) {
            third = numbers[i];
        }
    }

    return third;
}

const result = thirdHighest();
console.log(`The third highest number is: ${result}`);
 31])); // Output: 11
