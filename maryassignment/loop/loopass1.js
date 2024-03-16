// Program to check if a number is prime or not
// Take input from the user
const number = 3;
let isPrime = true;

// Check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  // Looping through 2 to number-1
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
} else {
  console.log("The number is not a prime number.");
}