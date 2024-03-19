//Write a function that takes a string as an argument and counts the number of occurrences of a specific character in the string.

function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example usage:
const inputString = "hello world, how are you?";
const charToCount = "o";
const result1 = countCharacterOccurrences(inputString, charToCount);
console.log(`The character "${charToCount}" appears ${result1} times.`);