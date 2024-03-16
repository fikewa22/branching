//Create a function that takes 5 numbers as an argument and returns the largest number.

function findLargestNumber(numbers) {
    if (numbers.length !== 5) {
        return "Please provide an array with exactly 5 numbers.";
    }

    let largest = -Infinity; // Initialize with negative infinity

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return `The largest number in the array is: ${largest}`;
}

// Example usage:
const int = [10, 25, 7, 42, 18];
const result = findLargestNumber(int);
console.log(result); // Output: "The largest number in the array is: 42"
    